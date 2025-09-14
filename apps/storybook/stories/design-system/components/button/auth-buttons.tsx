'use client';

import { Button } from '@repo/design-system/components/ui/button';
import type { ButtonProps } from '@repo/design-system/components/ui/button';
import { cn } from '@repo/design-system/lib/utils';
import { useRouter } from 'next/router';

export function SignOut({ className, ...rest }: ButtonProps) {
  const router = useRouter();
  return (
    <Button
      {...rest}
      className={cn(className)}
      onClick={() => () => {
        router.push('/sign-in'); // redirect to login page
      }}
    >
      Log out
    </Button>
  );
}
