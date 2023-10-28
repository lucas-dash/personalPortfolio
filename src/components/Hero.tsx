import { Button } from './ui/button';
import Image from 'next/image';

export const Hero = () => {
  return (
    <section className="w-[90%] md:w-4/5 mx-auto h-full">
      <div className="flex flex-col items-center justify-around h-full">
        <div className="flex flex-col gap-7">
          <div className="flex items-center md:items-end flex-col gap-5 md:flex-row">
            <div className="w-[130px] h-[130px] rounded-full">
              <Image
                src={'/Lou2.png'}
                alt="profile photo"
                width={130}
                height={130}
              />
            </div>
            <h1 className="text-4xl font-inter text-center font-medium md:pb-3">
              Lucas Homolka
            </h1>
          </div>

          <h3 className="font-medium font-inter text-3xl md:text-4xl lg:text-5xl text-center">
            Creative{' '}
            <span className="inline-block bg-gradient-to-r from-secondary to-accent font-semibold text-transparent bg-clip-text px-2">
              Front-end Developer
            </span>
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
