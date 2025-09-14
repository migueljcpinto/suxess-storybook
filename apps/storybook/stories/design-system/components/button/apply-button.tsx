'use client';

import {
  type ButtonPropsAsLink,
  buttonVariants,
} from '@repo/design-system/components/ui/button';
import { cn } from '@repo/design-system/lib/utils';
import Link from 'next/link';
import type React from 'react';
import { Children } from 'react';
import { toast } from 'sonner';
import {} from 'zod';
import type { Job, JobData } from '../../types/job-common';

interface ApplyButtonProps extends ButtonPropsAsLink {
  job: Job | JobData;
  customUrl?: string;
  children?: React.ReactNode;
  blank?: boolean;
  showToast?: boolean;
}

export function ApplyButton({
  job,
  className = 'default',
  customUrl,
  blank = true,
  children,
  variant,
  size,
  showToast = true,
  ...props
}: ApplyButtonProps) {
  const href = '';

  const handleClick = () => {
    if (showToast) {
      const jobTitle = 'data' in job ? job.data.title : job.title;
      toast.success('Apply Now!', {
        description: `You will be redirected to the application page for the job: ${jobTitle}`,
        duration: 3000,
      });
    }
  };

  return (
    <Link
      target={blank ? '_blank' : '_self'}
      className={cn(buttonVariants({ variant, size, className }))}
      href={href}
      onClick={handleClick}
      {...props}
    >
      {Children.count(children) === 0 && 'Apply Now'}
      {children}
    </Link>
  );
}
