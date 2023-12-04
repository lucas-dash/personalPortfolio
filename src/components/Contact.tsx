import Link from 'next/link';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Send } from 'lucide-react';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const validateString = (value: unknown, maxLength: number) => {
  if (!value || typeof value !== 'string' || value.length > maxLength) {
    return false;
  }

  return true;
};

export default function Contact() {
  // toast after sent
  // sendEmail.ts file

  const sendEmail = async (formData: FormData) => {
    'use server';

    const senderEmail = formData.get('senderEmail');
    const message = formData.get('message');

    // server side validation
    if (!validateString(senderEmail, 500)) {
      return {
        error: 'Invalid Email',
      };
    }

    if (!validateString(message, 5000)) {
      return {
        error: 'Invalid message',
      };
    }

    try {
      await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'homolka.lukas10@gmail.com',
        subject: 'Message from contact form',
        reply_to: senderEmail as string,
        text: message as string,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-[80vh] flex flex-col items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center p-7">
        <h3 className="text-3xl font-semibold py-5 sm:py-2">Contact Me</h3>
        <p className="text-sm text-center">
          Kontaktujte mě přimo na email
          <Button asChild variant={'link'} className="p-2">
            <Link href={'mailto:homolka.lukas10@gmail.com'}>
              homolka.lukas10@gmail.com
            </Link>
          </Button>
          <br />
          nebo pomocí tohoto formuláře.
        </p>
      </div>

      <form className="flex flex-col gap-5" action={sendEmail}>
        <Input
          type="email"
          name="senderEmail"
          placeholder="Your E-mail"
          className="rounded-xl"
          required
        />
        <Textarea
          name="message"
          placeholder="Type your message here."
          className="rounded-xl sm:min-w-[300px]"
          required
        />
        <Button type="submit" variant={'default'} className="flex gap-2 group">
          Send
          <Send
            size={16}
            className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-all"
          />
        </Button>
      </form>
    </section>
  );
}
