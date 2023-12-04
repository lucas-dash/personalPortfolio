import Link from 'next/link';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Send } from 'lucide-react';

export default function Contact() {
  // toast after sent

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

      <form
        className="flex flex-col gap-5"
        // action={(formData) => console.log(formData)}
      >
        <Input type="email" placeholder="Your E-mail" className="rounded-xl" />
        <Textarea
          placeholder="Type your message here."
          className="rounded-xl sm:min-w-[300px]"
        />
        <Button type="submit" variant={'default'} className="flex gap-2 group">
          Odeslat
          <Send
            size={16}
            className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-all"
          />
        </Button>
      </form>
    </section>
  );
}
