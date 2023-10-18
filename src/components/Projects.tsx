import { projects } from '@/lib/constants';
import Image from 'next/image';
import { GithubIcon } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';
import { Badge } from './ui/badge';

export const Projects = () => {
  return (
    <section className="bg-primary md:w-[95%] mx-auto h-max rounded-[56px] p-6 md:p-10">
      <h2 className="text-3xl lg:text-4xl pl-6 pb-8 sm:px-16 font-bold text-slate-50">
        {'//Projects'}
      </h2>

      <div className="flex flex-col gap-10">
        {projects.map(
          ({ id, name, description, github, link, image, techStack }) => {
            return (
              <article
                key={id}
                className="rounded-[30px] bg-white flex flex-col md:flex-row justify-between gap-6 px-8 py-9"
              >
                <div className="rounded-2xl border border-slate-950 overflow-hidden aspect-video min-w-[50%]">
                  <Image
                    src={image}
                    alt={`${name} project image`}
                    width={600}
                    height={300}
                  />
                </div>

                <section className="flex flex-col justify-between min-w-[45%] min-h-[200px]">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-medium text-xl">{name}</h3>
                      <Button
                        asChild
                        variant={'ghost'}
                        size={'icon'}
                        className="rounded-full"
                      >
                        <Link href={github}>
                          <GithubIcon />
                        </Link>
                      </Button>
                    </div>

                    <p className="font-inter">{description}</p>

                    <div className="flex items-center flex-wrap gap-2 pt-2">
                      {techStack.map((tech, index) => (
                        <Badge
                          key={index}
                          variant={'secondary'}
                          className="bg-secondary rounded-full text-sm hover:bg-secondary"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full" asChild>
                    <Link href={link}>Look At</Link>
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
