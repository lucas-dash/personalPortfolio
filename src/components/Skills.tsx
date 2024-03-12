import { skills, softSkill, tools } from '@/lib/constants';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import Image from 'next/image';

export default function Skills() {
  return (
    <section
      className="sm:w-[90%] mx-auto h-full min-h-[calc(100vh-72px)] flex flex-col justify-center gap-14 sm:gap-24 my-10"
      id="skills"
    >
      <h2 className="text-3xl font-bold text-center pt-4">{'//Skills'}</h2>

      <article className="flex flex-col gap-5 px-5">
        <div className="font-semibold flex items-center sm:text-lg justify-center">
          <h3>Tech Stack</h3>
        </div>
        <section className="flex gap-4 flex-wrap justify-center max-w-5xl mx-auto">
          {skills.map(({ id, title, icon }) => {
            return (
              <Badge
                variant={'secondary'}
                key={id}
                className="flex items-center gap-1"
              >
                {icon && (
                  <Image
                    src={`/tech-icons${icon}`}
                    alt={`${title} icon`}
                    width={26}
                    height={26}
                    className="object-cover"
                  />
                )}
                {title}
              </Badge>
            );
          })}
        </section>
        <Separator className="max-w-4xl mx-auto" />

        <div className="font-semibold flex items-center sm:text-lg justify-center">
          <h3>Tools</h3>
        </div>

        <section className="flex gap-4 flex-wrap justify-center max-w-5xl mx-auto">
          {tools.map(({ id, title, icon }) => {
            return (
              <Badge
                variant={'secondary'}
                key={id}
                className="flex items-center gap-1"
              >
                {icon && (
                  <Image
                    src={`/tech-icons${icon}`}
                    alt={`${title} icon`}
                    width={22}
                    height={22}
                    className="object-cover"
                  />
                )}
                {title}
              </Badge>
            );
          })}
        </section>
        <Separator className="max-w-md mx-auto" />

        <div className="flex items-center font-semibold sm:text-lg justify-center flex-wrap ">
          <h3>Soft Skills</h3>
        </div>
        <div className="flex gap-4 flex-wrap justify-center max-w-5xl mx-auto">
          {softSkill.map(({ id, title }) => {
            return (
              <Badge variant={'secondary'} key={id} className="text-center">
                {title}
              </Badge>
            );
          })}
        </div>
      </article>
    </section>
  );
}
