import type { ReactNode } from "react";

export default function TeaserBarWrapper({
  headline,
  children,
}: {
  headline: string;
  children: ReactNode;
}) {
  return (
    <section className="outer-container grid justify-center py-container md:gap-y-4 dark:bg-background print:hidden">
      <h3 className="mb-4 md:mb-0">{headline}</h3>
      <div className="inner-container grid grid-flow-row grid-cols-1 gap-y-8 md:grid-flow-col md:grid-cols-3 md:gap-x-8">
        {children}
      </div>
    </section>
  );
}
