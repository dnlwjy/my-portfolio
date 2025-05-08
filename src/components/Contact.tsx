import { ArrowRight, Mail, Github, Linkedin } from "lucide-react";
import { useState, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { Separator } from "@/components/ui/separator";
import { supabase } from "@/integrations/supabase/client";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ReCAPTCHA from "react-google-recaptcha";

// Configuration
const RECAPTCHA_SITE_KEY = "YOUR_ACTUAL_RECAPTCHA_SITE_KEY"; // Replace this with your actual site key from Google reCAPTCHA admin console

// Create schema for form validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  recaptcha: z.string().min(1, { message: "Please complete the reCAPTCHA verification." })
});

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      recaptcha: ""
    }
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      console.log("Submitting form data:", data);
      
      // Submit form data to Supabase
      const { error } = await supabase
        .from('form_submissions')
        .insert([
          {
            name: data.name,
            email: data.email,
            message: data.message,
            recaptcha_token: data.recaptcha
          }
        ]);
      
      if (error) {
        console.error('Error submitting form:', error);
        throw error;
      }
      
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      // Reset form and reCAPTCHA after successful submission
      form.reset();
      recaptchaRef.current?.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Something went wrong",
        description: "Your message couldn't be sent. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReCaptchaChange = (token: string | null) => {
    form.setValue("recaptcha", token || "");
  };

  return (
    <section id="contact" className="py-20 bg-dark-secondary relative overflow-hidden">
      <Separator className="mb-20 bg-gray-800" />
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-highlight/5 rounded-full filter blur-3xl -z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="h-1 w-20 bg-highlight mx-auto mb-6"></div>
            <p className="text-gray-400">
              Have a project in mind or want to discuss potential collaborations? 
              I'd love to hear from you!
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-2 space-y-6">
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">Contact Information</h3>
                <p className="text-gray-400 mb-6">
                  Feel free to reach out through the form or via direct channels below.
                </p>
                
                <div className="space-y-4">
                  <a 
                    href="mailto:hello@example.com" 
                    className="flex items-center gap-3 text-gray-300 hover:text-highlight transition-colors"
                  >
                    <Mail size={18} />
                    <span>hello@example.com</span>
                  </a>
                  
                  <div className="flex items-center gap-4 pt-4">
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded-full bg-dark flex items-center justify-center text-gray-400 hover:text-highlight transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded-full bg-dark flex items-center justify-center text-gray-400 hover:text-highlight transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="glass-card rounded-xl p-6 space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-400">Name</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-highlight/50"
                              placeholder="Your name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-400">Email</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="email"
                              className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-highlight/50"
                              placeholder="Your email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-400">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            rows={5}
                            className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-highlight/50"
                            placeholder="Your message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="recaptcha"
                    render={() => (
                      <FormItem>
                        <FormControl>
                          <div className="flex justify-center md:justify-start">
                            <ReCAPTCHA
                              ref={recaptchaRef}
                              sitekey={RECAPTCHA_SITE_KEY}
                              onChange={handleReCaptchaChange}
                              theme="dark"
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-highlight hover:bg-highlight-secondary text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center disabled:opacity-70"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && <ArrowRight size={16} className="ml-2" />}
                  </button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
