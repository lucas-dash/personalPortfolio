import { Button } from './ui/button';
import { Loader2, Send } from 'lucide-react';
import { useFormStatus } from 'react-dom';

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      variant={'default'}
      className={`flex gap-2 group`}
      disabled={pending}
      aria-disabled={pending}
    >
      {pending ? 'Sending' : 'Send'}
      {pending ? (
        <Loader2 size={16} className="animate-spin" />
      ) : (
        <Send
          size={16}
          className={`group-hover:-translate-y-1 group-hover:translate-x-1 transition-all`}
        />
      )}
    </Button>
  );
}
