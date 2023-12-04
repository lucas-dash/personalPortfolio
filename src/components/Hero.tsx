'use client';

import { Button } from './ui/button';
import { Link } from 'react-scroll';

export const Hero = () => {
  return (
    <section className="w-[90%] md:w-4/5 mx-auto h-[calc(100vh-72px)]">
      <div className="flex flex-col items-center justify-evenly h-full">
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center font-medium font-inter">
            Welcome to my <br />
            <span className="inline-block bg-gradient-to-r from-green-400 via-secondary to-accent font-bold text-transparent bg-clip-text p-2 animate-gradient bg-300% text-5xl md:text-6xl lg:text-7xl py-4 ">
              Digital Playground
            </span>
          </h1>
          <h3 className="text-xl sm:text-2xl font-semibold text-center font-inter">
            Front-End Developer Portfolio
          </h3>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-5">
          <Button className="min-w-[150px]" asChild>
            <Link
              role="button"
              to="contact"
              spy={true}
              offset={-20}
              smooth={true}
              duration={600}
              aria-label="scroll to Contact me section"
            >
              Contact
            </Link>
          </Button>
          <Button variant={'secondary'} className="min-w-[150px]">
            Download CV
          </Button>
        </div>
      </div>
    </section>
  );
};
