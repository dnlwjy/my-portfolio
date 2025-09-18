
import { ArrowRight } from "lucide-react";
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
    <section id="contact" className="py-40 p-6 flex flex-col gap-10 mx-auto w-full">
      
      <div className="flex text-center justify-center items-center gap-6 mb-10">
        <h2 className="text-[48px] md:text-[72px]"><span className="text-gray">Any Questions?</span><br />I'm All Ears</h2>
      </div>

      <div className="flex flex-col md:flex-row gap-6 w-full">

        <ContactCard
          title="Contact details"
          contactlinks={[
            { title: "wijayadaniel19@gmail.com ↗", link: "mailto:wijayadaniel19@gmail.com", external: true },
            { title: "+62 811 1388 895 ↗", link: "tel:+628111388895", external: true },
          ]}
        />

        <ContactCard
          title="Address"
          address={"Puri Kencana K1/19\nJakarta, Indonesia"}
        />

      </div>

      <div className="w-full">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="rounded-lg gap-6">
            <div className="flex flex-col gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
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
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
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
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        rows={5}
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
                    <div className="flex justify-start my-8">
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