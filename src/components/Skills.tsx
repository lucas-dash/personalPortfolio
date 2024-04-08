'use client';

import { skills, softSkill, tools } from '@/lib/constants';
import { Separator } from './ui/separator';
import StaggerBadge from './StaggerBadge';

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

        <StaggerBadge badges={skills} />

        <Separator className="max-w-4xl mx-auto" />

        <div className="font-semibold flex items-center sm:text-lg justify-center">
          <h3>Tools</h3>
        </div>

        <StaggerBadge badges={tools} />

        <Separator className="max-w-md mx-auto" />

        <div className="flex items-center font-semibold sm:text-lg justify-center flex-wrap ">
          <h3>Soft Skills</h3>
        </div>
        <StaggerBadge badges={softSkill} />
      </article>
    </section>
  );
}
