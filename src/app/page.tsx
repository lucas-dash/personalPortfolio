import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <header className="fixed inset-0 top-4 w-[95%] sm:w-[90%] mx-auto bg-primary rounded-full h-14 font-medium text-slate-50 flex items-center max-[445px]:justify-between gap-4 px-3 max-w-7xl">
        <div className="min-w-[40px] min-h-[40px] rounded-full gap-2 bg-slate-50 flex items-center justify-center">
          <Image src={'/MoonLogo.svg'} alt="logo" width={34} height={34} />
        </div>

        <nav className="w-full max-[445px]:hidden">
          <ul className="flex items-center justify-center gap-10">
            <li>{'//About'}</li>
            <li>{'//Skills'}</li>
            <li>{'//Projects'}</li>
          </ul>
        </nav>

        <Button variant={'accent'} className="min-[445px]:hidden w-full">
          Contact
        </Button>

        <Button
          size={'icon'}
          variant={'ghost'}
          className="rounded-full min-w-[40px] min-[445px]:hidden"
        >
          <ChevronDown />
        </Button>
      </header>

      <main className="mt-[calc(16px+56px)]">
        <section>
          <div>
            <div className="w-[130px] h-[130px] bg-slate-500 rounded-full"></div>
            <h1>Lucas Homolka</h1>
            <h3>
              Creative <span>Front-end Developer</span>
            </h3>

            <div className="flex items-center gap-6">
              <Button>Contact</Button>
              <Button>Download CV</Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
