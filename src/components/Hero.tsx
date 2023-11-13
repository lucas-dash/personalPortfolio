import { Button } from './ui/button';

export const Hero = () => {
  return (
    <section className="w-[90%] md:w-4/5 mx-auto h-full">
      <div className="flex flex-col items-center justify-evenly h-full">
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl sm:text-4xl lg:text-6xl text-center font-medium font-inter">
            Welcome to my <br />
            <span className="inline-block bg-gradient-to-r from-secondary via-green-400 to-accent font-bold text-transparent bg-clip-text p-2 animate-gradient bg-300% text-4xl md:text-6xl lg:text-7xl">
              Digital Playground
            </span>
          </h1>
          <h3 className="text-xl sm:text-2xl font-semibold text-center font-inter">
            Front-End Developer Portfolio
          </h3>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-5">
          <Button className="min-w-[150px]">Contact</Button>
          <Button variant={'secondary'} className="min-w-[150px]">
            Download CV
          </Button>
        </div>
      </div>
    </section>
  );
};
