import About from '@/components/About';
import Contact from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import Navbar from '@/components/Navbar';
import { Projects } from '@/components/Projects';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="mt-[calc(16px+56px)] font-mono">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
