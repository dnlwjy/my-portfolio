import { ArrowRight } from 'lucide-react';
import { useState, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import ReCAPTCHA from 'react-google-recaptcha';
import ContactCard from './ui/ContactCard';
import AnimationText from './ui/AnimationText';
import AnimationGroup from './ui/AnimationGroup';
import { toast } from 'sonner';
import { FunctionsHttpError, FunctionsRelayError, FunctionsFetchError } from "@supabase/supabase-js";
import {
  generateOwnerNotificationEmail,
  generateOwnerNotificationSubject,
  generateUserConfirmationEmail,
  generateUserConfirmationSubject,
} from '@/templates/emails';

const RECAPTCHA_SITE_KEY = "6Ld3wTIrAAAAAAZdro17b1BoqdzbudrhayMGT9NZ";

const formSchema = z.object({
  name: z.string().min(2, { message: 'Please fill in your name.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters.' }),
  recaptcha: z
    .string()
    .min(1, { message: 'Please complete the reCAPTCHA verification.' }),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
      recaptcha: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);

    try {
      // Submit to Supabase
      const { error } = await supabase.from('form_submissions').insert([
        {
          name: data.name,
          email: data.email,
          message: data.message,
          recaptcha_token: data.recaptcha,
        },
      ]);

      if (error) {
        throw new Error('Failed to save form data');
      }

      // Generate email template for owner (with reply-to to user's email)
      const emailToOwnerHTML = generateOwnerNotificationEmail({
        name: data.name,
        email: data.email,
        message: data.message,
      });

      const ownerSubject = generateOwnerNotificationSubject(data.name);

      // Send email to owner with reply-to set to user's email
      const { data: emailOwnerData, error: sendEmailError } = await supabase.functions.invoke('send-emails', {
        body: {
          email: data.email,
          subject: ownerSubject,
          message: emailToOwnerHTML,
          sendToMe: true,
          replyTo: data.email, // This makes the reply button go directly to user's email
          senderName: data.name
        },
      });

      if (sendEmailError) {
        if (sendEmailError instanceof FunctionsHttpError) {
          const errorData = await sendEmailError.context.json();
          throw new Error('Failed to send email to owner: ' + JSON.stringify(errorData));
        } else if (sendEmailError instanceof FunctionsRelayError) {
          throw new Error('Relay error: ' + sendEmailError.message);
        } else if (sendEmailError instanceof FunctionsFetchError) {
          throw new Error('Network error: ' + sendEmailError.message);
        }
        throw new Error('Failed to send email to owner');
      }

      // Generate confirmation email template for user
      const emailToUserHTML = generateUserConfirmationEmail({
        name: data.name,
        email: data.email,
        message: data.message,
      });

      const userSubject = generateUserConfirmationSubject();

      // Send confirmation email to user
      const { data: emailUserData, error: sendEmailNotification } = await supabase.functions.invoke('send-emails', {
        body: {
          email: data.email,
          subject: userSubject,
          message: emailToUserHTML,
          sendToMe: false
        },
      });

      if (sendEmailNotification) {
        if (sendEmailNotification instanceof FunctionsHttpError) {
          const errorData = await sendEmailNotification.context.json();
          console.error('HTTP Error sending notification:', errorData);
          // Don't throw error since main email was already sent
          console.warn('Confirmation email failed to send, but form submission succeeded');
        } else if (sendEmailNotification instanceof FunctionsRelayError) {
          console.error('Relay Error:', sendEmailNotification.message);
        } else if (sendEmailNotification instanceof FunctionsFetchError) {
          console.error('Fetch Error:', sendEmailNotification.message);
        }
        // Continue since email to owner was already sent
      }

      toast.success('Message sent!', {
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      // Reset form and reCAPTCHA after successful submission
      form.reset();
      recaptchaRef.current?.reset();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An error occurred';
      toast.error('Failed to send message', {
        description: errorMessage + '. Please try again or contact directly via email.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReCaptchaChange = (token: string | null) => {
    form.setValue('recaptcha', token || '');
  };

  return (
    <section
      id="contact"
      aria-label="Get in touch"
      className="py-20 text-center justify-center items-center flex flex-col gap-10 mx-auto w-full"
    >
      <h2 className="text-[44px] md:text-[72px] mb-10">
        <AnimationText text="Any Questions?" className="text-gray" delay={0} />
        <br />
        <AnimationText text="I'm All Ears" delay={100} />
      </h2>

      <AnimationGroup
        delay={300}
        className="flex flex-col md:flex-row gap-6 w-full text-start"
      >
        <ContactCard
          title="Contact details"
          aria="My email and my phone number"
          contactlinks={[
            {
              title: 'wijayadaniel19@gmail.com ↗',
              link: 'mailto:wijayadaniel19@gmail.com',
            },
            { title: '+62 811 1388 895 ↗', link: 'tel:+628111388895' },
          ]}
        />

        <ContactCard
          title="Address"
          aria="My address"
          address={'Puri Kencana K1 / 19\n, Kembangan, Jakarta, Indonesia'}
        />
      </AnimationGroup>

      <AnimationGroup delay={300} className="w-full text-start">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="rounded-lg gap-6"
          >
            <div className="flex flex-col gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="John Doe" />
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
                      <Input {...field} type="email" placeholder="Your email" />
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
              className="mt-8 bg-blue px-8 rounded-full transition-all font-inter font-medium duration-300 h-12 flex items-center border-t border-white/5 text-white hover:text-black hover:bg-white"
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
              {!isSubmitting && <ArrowRight size={16} className="ml-2" />}
            </button>
          </form>
        </Form>
      </AnimationGroup>
    </section>
  );
};

export default Contact;
