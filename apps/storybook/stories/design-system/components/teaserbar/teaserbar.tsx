'use client';

import { buttonVariants } from '@repo/design-system/components/ui/button';
import { cn } from '@repo/design-system/lib/utils';
import { ArrowRightIcon } from 'lucide-react';
import { useState } from 'react';
import type { JobadComponentProps } from '../../types/job-common';
import TeaserBarWrapper from './teaserbar-wrapper';
import { TeaserCard } from './teasercard';

export function TeaserBar(_props?: JobadComponentProps) {
  const [open, onOpenChange] = useState(false);

  return (
    <>
      <TeaserBarWrapper headline="Teaserbar TKAG">
        <TeaserCard
          href="https://karriere.thyssenkrupp.com/en/tips-applying"
          src="images/teaserbar/infotile1.jpeg"
        >
          <h4 className="mb-4 flex-grow text-3xl! transition-colors duration-500 group-hover:text-ring">
            Applications tips
          </h4>
          <p
            className={cn(
              buttonVariants({ variant: 'link' }),
              'group-hover-after-underline font-normal text-lg'
            )}
          >
            <ArrowRightIcon className="size-6 h-7 text-brand dark:text-ring" />
            More information
          </p>
        </TeaserCard>
        <TeaserCard href="#" src="images/teaserbar/infotile2.jpeg">
          <h4 className="mb-4 text-3xl! transition-colors duration-500 group-hover:text-ring">
            Opportunities in the energy sector
          </h4>
          <p
            className={cn(
              buttonVariants({ variant: 'link' }),
              'group-hover-after-underline font-normal text-lg'
            )}
          >
            <ArrowRightIcon className="size-6 h-7 text-brand dark:text-ring" />
            More information
          </p>
        </TeaserCard>
        <TeaserCard
          onClick={() => onOpenChange(!open)}
          onMouseEnter={() => {
            // Newsletter hover handler
          }}
          src="images/teaserbar/newsletter.jpg"
        >
          <h4 className="mb-4 text-3xl! transition-colors duration-500 group-hover:text-ring">
            Subscribe to our newsletter
          </h4>
          <p
            className={cn(
              buttonVariants({ variant: 'link' }),
              'group-hover-after-underline font-normal text-lg'
            )}
          >
            <ArrowRightIcon className="size-6 h-7 text-brand dark:text-ring" />
            Subscribe
          </p>
        </TeaserCard>
      </TeaserBarWrapper>
    </>
  );
}
