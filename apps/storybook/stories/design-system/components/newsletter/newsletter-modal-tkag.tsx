"use client";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@repo/design-system/components/ui/drawer";
import { cn } from "@repo/design-system/utils/cn";
import { MapIcon } from "lucide-react";
import dynamic from "next/dynamic";
import { useWindowSize } from "usehooks-ts";
import { Button } from "~/components/ui/button-tkag";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog-tkag";
import { useLanguage } from "~/translations/loader/use-language";
import { SearchSummary } from "../filterbar/search-summary-tkag";

// Dynamic imports for newsletter components
const NewsletterFilterbar = dynamic(
  () =>
    import("./newsletter-filterbar-tkag").then(
      (mod) => mod.NewsletterFilterbar
    ),
  {
    loading: () => <div className="h-[300px] animate-pulse rounded bg-muted" />,
  }
);

const NewsletterForm = dynamic(() => import("./newsletter-form-tkag"), {
  loading: () => <div className="h-[400px] animate-pulse rounded bg-muted" />,
});

// Preload function to load components on hover
const preloadNewsletterComponents = () => {
  import("./newsletter-filterbar-tkag");
  import("./newsletter-form-tkag");
};

type BaseProps<T> = {
  title?: string;
  className?: string;
} & T;

type NewsletterModalProps =
  | BaseProps<{ open: boolean; onOpenChange: (open: boolean) => void }>
  | BaseProps<{ open?: undefined; onOpenChange?: undefined }>;

export function NewsletterModal({
  title,
  className,
  open,
  onOpenChange,
}: NewsletterModalProps) {
  const t = useLanguage();
  const { width } = useWindowSize();
  const isMobile = width <= 768;
  const isControlled = Boolean(onOpenChange);

  if (isMobile) {
    return (
      <Drawer onOpenChange={onOpenChange} open={open}>
        <DrawerTrigger asChild className={cn(isControlled && "hidden")}>
          <Button
            className={cn(className)}
            onMouseEnter={preloadNewsletterComponents}
          >
            {title ? (
              title
            ) : (
              <>
                <MapIcon className="dark:text-ring" size={17} />
                <span>{t.filterbar_subscribe}</span>
              </>
            )}
          </Button>
        </DrawerTrigger>
        <DrawerContent className="fixed right-0 bottom-0 left-0 z-50 mt-24 flex h-[80%] flex-col rounded-t-md bg-background outline-none lg:h-[320px]">
          <div className="flex-1 overflow-y-auto rounded-t-md p-4">
            <div className="mx-auto max-w-md space-y-4">
              <div className="py-4">
                <DrawerTitle asChild className="font-normal tracking-normal">
                  <h3>{t.newsletter_modal_header}</h3>
                </DrawerTitle>
              </div>
            </div>
            <NewsletterContent />
          </div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog onOpenChange={onOpenChange} open={open}>
      <DialogTrigger asChild className={cn(isControlled && "hidden")}>
        <Button
          className={cn(className)}
          onMouseEnter={preloadNewsletterComponents}
        >
          {title ? (
            title
          ) : (
            <>
              <MapIcon className="dark:text-ring" size={17} />
              <span className="mt-0.5">{t.filterbar_subscribe}</span>
            </>
          )}
        </Button>
      </DialogTrigger>
      <DialogContent
        className="flex h-full max-h-[80vh] flex-col p-0 sm:max-w-2xl"
        onEscapeKeyDown={(e) => {
          const content = document.getElementById("newsletter_filterbar");
          if (!content) {
            return;
          }

          for (const node of content.children) {
            const dataState = node.getAttribute("data-state");
            if (dataState === "open") {
              e.preventDefault();
              break;
            }
          }
        }}
      >
        <DialogHeader className="w-full flex-shrink-0 flex-row justify-between border-b px-6 py-4">
          <DialogTitle asChild>
            <h3>{t.newsletter_modal_header}</h3>
          </DialogTitle>
          <DialogClose />
        </DialogHeader>
        <div className="relative h-full">
          <div className="absolute h-full w-full space-y-4 overflow-hidden overflow-y-scroll px-6 pb-4">
            <DialogDescription className="mx-auto">
              {t?.newsletter_modal_intro}
            </DialogDescription>
            <NewsletterContent />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function NewsletterContent() {
  return (
    <>
      <NewsletterFilterbar />
      <SearchSummary />
      <NewsletterForm />
    </>
  );
}
