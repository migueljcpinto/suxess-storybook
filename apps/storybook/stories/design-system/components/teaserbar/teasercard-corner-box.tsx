import { cn } from '@repo/design-system/lib/utils';
import type { ReactNode } from 'react';

export function CornerBox({ children }: { children: ReactNode }) {
  return (
    <div
      className={cn(
        'before:-top-1 before:-left-1 after:-right-1 after:-bottom-1 relative before:absolute before:h-12 before:w-12 before:border-brand before:border-t-4 before:border-l-4 after:absolute after:h-12 after:w-12 after:border-brand after:border-r-4 after:border-b-4'
      )}
    >
      {children}
    </div>
  );
}
