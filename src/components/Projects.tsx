'use client';

import { projects } from '@/lib/constants';
import Image from 'next/image';
import { GithubIcon } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';
import { Badge } from './ui/badge';
import { motion, stagger, useAnimate, useInView } from 'framer-motion';
import { useEffect } from 'react';

export const Projects = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { amount: 0.2, once: true });

  useEffect(() => {
    if (isInView) {
      animate(
        'article',
        { opacity: 1, y: 0, scale: 1 },
        { delay: stagger(0.5), duration: 0.6 }
      );
    }
  }, [animate, isInView, scope]);

  return (
    <section
      className="bg-primary md:w-[95%] mx-auto h-max rounded-[56px] p-6 md:p-10"
      id="projects"
    >
      <h2 className="text-3xl lg:text-4xl pl-6 pb-10 sm:px-16 font-bold text-slate-50 container">
        {'//Projects'}
      </h2>

      <div className="flex flex-col gap-10" ref={scope}>
        {projects
          .sort((a, b) => a.id - b.id)
          .map(({ id, title, description, github, link, image, techStack }) => {
            return (
              <motion.article
                key={id}
                initial={{ opacity: 0, y: 100, scale: 0.5 }}
                className="rounded-[30px] bg-white flex flex-col md:flex-row justify-between gap-6 px-8 py-9 max-w-6xl mx-auto w-full"
              >
                <div className="rounded-2xl border border-slate-950 overflow-hidden aspect-video min-w-[50%] flex items-center justify-center">
                  {image ? (
                    <Image
                      src={image}
                      alt={`${title} project image`}
                      width={600}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center flex-col">
                      <p>🚧</p>
                      <p className="font-semibold text-center">
                        I&apos;m working on it...
                      </p>
                    </div>
                  )}
                </div>

                <section className="flex flex-col gap-5 justify-between min-w-[45%] min-h-[200px]">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-medium text-xl">{title}</h3>
                      <Button
                        asChild
                        variant={'secondary'}
                        size={'icon'}
                        className="rounded-full"
                      >
                        <Link href={github} target="_blank" rel="noreferrer">
                          <GithubIcon size={26} />
                        </Link>
                      </Button>
                    </div>

                    <div className="flex items-center flex-wrap gap-2 py-3">
                      {techStack.map((tech, index) => (
                        <Badge
                          key={index}
                          variant={'secondary'}
                          className="rounded-full text-sm bg-slate-200 hover:bg-slate-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <p className="font-inter">{description}</p>
                  </div>

                  <Button className="w-full" asChild>
                    <Link href={link} target="_blank" rel="noreferrer">
                      {link ? 'Look At' : 'Stay tuned!'}
                    </Link>
                  </Button>
                </section>
              </motion.article>
            );
          })}
      </div>
    </section>
  );
};
