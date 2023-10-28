import { Twitter } from 'lucide-react';
import Link from 'next/link';
export const Footer = () => {
  return (
    <footer className="min-h-[100px] bg-beige mt-10 flex items-center justify-between container rounded-t-2xl rounded-r-2xl">
      <h4>&copy;2023 Build with passion</h4>
      <div className="flex justify-between gap-4 ">
        <div className="bg-primary text-white p-2 rounded-full">
          <Link href={''}>
            <Twitter />
          </Link>
        </div>
      </div>
    </footer>
  );
};
