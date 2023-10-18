'use client';

import Image from 'next/image';
import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.header
      className="fixed inset-0 top-4 w-[95%] sm:w-[90%] mx-auto bg-primary rounded-full h-14 font-medium text-slate-50 flex items-center max-[445px]:justify-between gap-4 px-3 max-w-7xl"
      initial={{ maxWidth: 128 }}
      animate={{ maxWidth: 950, transition: { duration: 0.6, delay: 0.4 } }}
    >
      <div className="min-w-[40px] min-h-[40px] rounded-full gap-2 bg-slate-50 flex items-center justify-center">
        <Image src={'/MoonLogo.svg'} alt="logo" width={34} height={34} />
      </div>

      <motion.nav
        className="w-full max-[445px]:hidden [--display-from:none] min-[445px]:[--display-to:inline-block] [--opacity-from:0.1] [--opacity-to:1]"
        initial={{
          display: 'var(--display-from)',
          opacity: 'var(--opacity-from)',
        }}
        animate={{
          display: 'var(--display-to, none)',
          opacity: 'var(--opacity-to)',
          transition: {
            duration: 0.3,
            delay: 0.8,
          },
        }}
      >
        <ul className="flex items-center justify-center gap-10">
          <li>{'//About'}</li>
          <li>{'//Skills'}</li>
          <li>{'//Projects'}</li>
        </ul>
      </motion.nav>

      <motion.div
        className="min-[445px]:[--display-to:none] w-full [--display-from:none] [--scale-from:0%] [--scale-to:100%]"
        initial={{
          display: 'var(--display-from)',
          scale: 'var(--scale-from)',
        }}
        animate={{
          display: 'var(--display-to)',
          scale: 'var(--scale-to)',
          transition: { delay: 0.5, duration: 0.2 },
        }}
      >
        <Button variant={'accent'} className="w-full">
          Contact
        </Button>
      </motion.div>

      <Button
        size={'icon'}
        variant={'ghost'}
        className="rounded-full min-w-[40px] min-[445px]:hidden"
      >
        <ChevronDown />
      </Button>
    </motion.header>
  );
}
