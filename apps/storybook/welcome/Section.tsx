import { cn } from '@repo/design-system/lib/utils';
import { type MotionProps, motion } from 'framer-motion';
import type React from 'react';

export default function Section({
  children,
  className,
  ...motionProps
}: {
  children: React.ReactNode;
  className?: string;
} & MotionProps) {
  return (
    <motion.h2
      className={cn(
        'mb-[var(--sb-space-12)] font-[var(--sb-title-font-family)] text-[32px] text-[var(--sb-primary-text-color)] leading-[125%] tracking-[-1px]',
        'max-lg:text-[24px]',
        className
      )}
      {...motionProps}
    >
      {children}
    </motion.h2>
  );
}
