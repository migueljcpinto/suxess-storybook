import { buttonVariants } from '@repo/design-system/components/ui/button';
import { cn } from '@repo/design-system/lib/utils';
import Link from 'next/link';
import EntranceAnimation from '../EntranceAnimation';
import FloatingObjects from './FloatingObjects';
import FigmaIcon from './icons/FigmaIcon';
import GitHubIcon from './icons/GitHubIcon';

export default function Hero() {
  return (
    <div className="relative flex h-screen min-h-[600px] flex-col items-center justify-center overflow-hidden pb-[150px]">
      <FloatingObjects />
      <div className="relative z-10 flex w-[1300px] max-w-full flex-col items-center px-5 text-center">
        <EntranceAnimation delay={0}>
          <h1 className="m-0 text-center font-[var(--sb-title-font-family)] text-6xl text-[#121212] leading-[115%] antialiased">
            <div className="flex items-center justify-center gap-4 ">
              Suxess Design System
            </div>
            <div className="flex items-center justify-center gap-4">
              by For Suxess Team
            </div>
          </h1>
        </EntranceAnimation>

        <EntranceAnimation delay={0.1}>
          <p className="mx-0 my-5 text-center font-normal text-[20px] leading-[140%] antialiased max-lg:text-[16px] max-xl:text-[18px]">
            Design System with React, Tailwind CSS and Shadcn UI
            <br />
            Built with ❤️ by For Suxess Team
          </p>
        </EntranceAnimation>

        <EntranceAnimation delay={0.2}>
          <div className="flex gap-3">
            <Link
              className={cn(buttonVariants({ variant: 'outline' }))}
              href="https://github.com/parasucesso/suxess-storybook"
            >
              <GitHubIcon /> <span>GitHub</span>
            </Link>
            <Link
              className={cn(buttonVariants({ variant: 'outline' }))}
              href="https://github.com/parasucesso/suxess-storybook"
            >
              <FigmaIcon /> <span>Figma</span>
            </Link>
          </div>
        </EntranceAnimation>
      </div>
    </div>
  );
}
