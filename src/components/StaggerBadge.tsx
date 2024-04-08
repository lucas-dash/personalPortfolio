'use client';

import { motion, stagger, useAnimate, useInView } from 'framer-motion';
import { useEffect } from 'react';
import { Badge } from './ui/badge';
import Image from 'next/image';

type StaggerBadgeProps = {
  badges: {
    id: number;
    title: string;
    icon?: string;
  }[];
};

export default function StaggerBadge({ badges }: StaggerBadgeProps) {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { amount: 0.2, once: true });

  useEffect(() => {
    if (isInView) {
      animate(
        'li',
        { scale: 1, opacity: 1 },
        { delay: stagger(0.2), duration: 0.2 }
      );
    }
  }, [animate, isInView, scope]);
  return (
    <ul
      className="flex gap-4 flex-wrap justify-center max-w-5xl mx-auto"
      ref={scope}
    >
      {badges.map(({ id, title, icon }) => {
        return (
          <motion.li key={id} initial={{ opacity: 0, scale: 0 }}>
            <Badge variant={'secondary'} className="flex items-center gap-1">
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
          </motion.li>
        );
      })}
    </ul>
  );
}
