import { projects } from '@/lib/constants';
import Image from 'next/image';
import { GithubIcon } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';
import { Badge } from './ui/badge';

export const Projects = () => {
  return (
    <section
      className="bg-primary md:w-[95%] mx-auto h-max rounded-[56px] p-6 md:p-10"
      id="projects"
    >
      <h2 className="text-3xl lg:text-4xl pl-6 pb-10 sm:px-16 font-bold text-slate-50 container">
        {'//Projects'}
      </h2>

      <div className="flex flex-col gap-10">
        {projects.map(
          ({ id, name, description, github, link, image, techStack }) => {
            return (
              <article
                key={id}
                className="rounded-[30px] bg-white flex flex-col md:flex-row justify-between gap-6 px-8 py-9 max-w-6xl mx-auto w-full"
              >
                <div className="rounded-2xl border border-slate-950 overflow-hidden aspect-video min-w-[50%] flex items-center justify-center">
                  <Image
                    src={image}
                    alt={`${name} project image`}
                    width={600}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>

                <section className="flex flex-col gap-5 justify-between min-w-[45%] min-h-[200px]">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-medium text-xl">{name}</h3>
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
                          className="rounded-full text-sm bg-slate-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <p className="font-inter">{description}</p>
                  </div>

                  <Button className="w-full" asChild>
                    <Link href={link} target="_blank" rel="noreferrer">
                      Look At
                    </Link>
                  </Button>
                </section>
              </article>
            );
          }
        )}
      </div>
    </section>
  );
};
