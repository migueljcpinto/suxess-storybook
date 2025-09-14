import { Card } from '@repo/design-system/components/ui/card';
import { CustomImage } from '@repo/design-system/components/ui/custom-image';
import { CustomLink } from '@repo/design-system/components/ui/custom-link';
import type { ReactNode } from 'react';
import { CornerBox } from './teasercard-corner-box';

type BaseProps = {
  src: string;
  children: ReactNode;
  teaser?: string;
};

export type TeaserCardProps =
  | (BaseProps & { onClick?: undefined; href: string })
  | (BaseProps & {
      href?: undefined;
      onClick: () => void;
      onMouseEnter: () => void;
    });

export function TeaserCard({ src, href, children, ...props }: TeaserCardProps) {
  if (href) {
    return (
      <Card className="group border-none bg-transparent p-0 text-foreground shadow-none">
        <CustomLink blank href={href}>
          <CornerBox>
            <div className="relative w-full overflow-hidden">
              <CustomImage
                className="aspect-[3/2] h-full w-full object-cover object-top duration-500 ease-in-out group-hover:scale-110"
                height={266}
                loading="lazy"
                priority={false}
                sizes="(max-width: 768px) 100vw, 33vw"
                src={src}
                width={400}
              />
            </div>
          </CornerBox>
          <div className="pt-6">{children}</div>
        </CustomLink>
      </Card>
    );
  }

  return (
    <Card className="group border-none bg-transparent p-0 text-foreground shadow-none">
      <button
        className="cursor-pointer text-start"
        onClick={props.onClick}
        type="button"
      >
        <CornerBox>
          <div className="relative w-full overflow-hidden">
            <CustomImage
              className="h-full w-full object-cover duration-500 ease-in-out group-hover:scale-110"
              height={266}
              loading="lazy"
              priority={false}
              sizes="(max-width: 768px) 100vw, 33vw"
              src={src}
              width={400}
            />
          </div>
        </CornerBox>
        <div className="pt-6">{children}</div>
      </button>
    </Card>
  );
}
