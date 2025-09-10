
import { ArrowRight, Mail, Github, Linkedin } from "lucide-react";
import { useState, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ReCAPTCHA from "react-google-recaptcha";
import ContactCard from "./ui/ContactCard";

// Configuration
const RECAPTCHA_SITE_KEY = "6Ld3wTIrAAAAAAZdro17b1BoqdzbudrhayMGT9NZ";

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
    <section id="contact" className="py-20 p-6 flex flex-col gap-10 mx-auto w-full">

      <div className="flex items-center gap-6">
        <h2>Contact</h2>
        <hr className="flex-grow h-0.5 bg-darkgray" />
      </div>

      <div className="flex flex-col md:flex-row gap-6 w-full">

        <ContactCard
          title="Contact details"
          contactlinks={[
            { title: "wijayadaniel19@gmail.com", link: "mailto:wijayadaniel19@gmail.com", external: true },
            { title: "+62 811 1388 895", link: "tel:+628111388895", external: true },
          ]}
        />

        <ContactCard
          title="Address"
          address={"Puri Kencana K1/19\nJakarta, Indonesia"}
        />

      </div>

      <div className="w-full">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="rounded-lg p-4 gap-6">
            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-inter text-[14px] font-medium text-white">Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="w-full h-12 bg-darkgray border border-white/20 rounded-lg p-4 text-white focus:outline-none focus:ring-2 focus:ring-highlight/50"
                        placeholder="John Doe"
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
                    <FormLabel className="font-inter text-[14px] font-medium text-white">Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        className="w-full h-12 bg-darkgray border border-white/20 rounded-lg p-4 text-white focus:outline-none focus:ring-2 focus:ring-highlight/50"
                        placeholder="Your email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />


              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-inter text-[14px] font-medium text-white">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        rows={5}
                        className="w-full bg-darkgray border border-white/20 rounded-lg p-4 text-white focus:outline-none focus:ring-2 focus:ring-highlight/50"
                        placeholder="Your message"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="recaptcha"
              render={() => (
                <FormItem>
                  <FormControl>
                    <div className="flex justify-start mt-8">
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={RECAPTCHA_SITE_KEY}
                        onChange={handleReCaptchaChange}
                        theme="dark"
                        size="normal"
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
              className="bg-blue px-8 rounded-full transition-all font-medium duration-300 h-12 flex items-center border-t border-white/5 text-white hover:text-black hover:bg-white"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              {!isSubmitting && <ArrowRight size={16} className="ml-2" />}
            </button>
          </form>
        </Form>
      </div>

    </section>
  );
};

export default Contact;