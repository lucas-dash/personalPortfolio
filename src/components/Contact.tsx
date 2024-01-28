'use client';
import Link from 'next/link';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { sendEmail } from '@/actions/sendEmail';
import { useToast } from './ui/use-toast';
import SubmitButton from './submit-button';

export default function Contact() {
  const { toast } = useToast();

  return (
    <section
      id="contact"
      className="min-h-[80vh] flex flex-col items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center p-7">
        <h3 className="text-3xl lg:text-4xl font-semibold py-5 sm:py-2">
          Contact Me
        </h3>
        <p className="text-sm text-center">
          Kontaktujte mě přímo na email
          <Button asChild variant={'link'} className="p-2">
            <Link href={'mailto:homolka.lukas10@gmail.com'}>
              homolka.lukas10@gmail.com
            </Link>
          </Button>
          <br />
          nebo pomocí tohoto formuláře.
        </p>
      </div>

      <form
        className="flex flex-col gap-5"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast({
              title: 'Something went wrong!',
              description: error,
              variant: 'destructive',
            });
            return;
          }

          toast({
            title: 'Email has been sent successfully!',
            variant: 'success',
          });
        }}
      >
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
        <SubmitButton />
      </form>
    </section>
  );
}
