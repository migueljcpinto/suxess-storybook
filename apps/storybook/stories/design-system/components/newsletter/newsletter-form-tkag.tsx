"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CustomLink } from "@repo/design-system/components/ui/custom-link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@repo/design-system/components/ui/form";
import {
  RadioGroup,
  RadioGroupItem,
} from "@repo/design-system/components/ui/radio-group";
import { formatNuqsState } from "@repo/design-system/hooks/lib/format-nuqs-state";
import { useFilterSearchState } from "@repo/design-system/hooks/use-filtersearch-state";
import { useGeoSearch } from "@repo/design-system/hooks/use-geosearch";
import { useLocale } from "@repo/design-system/hooks/use-locale";
import { useSearchqueryState } from "@repo/design-system/hooks/use-searchquery-state";
import type { FilterSearchParams } from "@repo/design-system/types/filter";
import { useClient } from "@repo/design-system/utils/client/client";
import { cn } from "@repo/design-system/utils/cn";
import { normalizeFilterSearchParams } from "@repo/design-system/utils/filterSearch/utils";
import { toDataDotFilter } from "@repo/design-system/utils/helpers";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import z from "zod";
import { Button, buttonVariants } from "~/components/ui/button-tkag";
import { Checkbox } from "~/components/ui/checkbox-tkag";
import { FormDescription } from "~/components/ui/form";
import { Input } from "~/components/ui/input-base";
import { useLanguage } from "~/translations/loader/use-language";

export const newsletterSchema = z.object({
  email: z.email({
    message: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
  }),
  subscriptionInterval: z.enum(["daily", "weekly"], {
    error: "Bitte wählen Sie einen Benachrichtigungsrhythmus aus.",
  }),
  privacy: z.boolean().refine((val) => val),
});

type NewsletterSchema = z.infer<typeof newsletterSchema>;

export default function NewsletterForm() {
  const t = useLanguage();
  const locale = useLocale();
  const client = useClient();
  const [state] = useFilterSearchState();
  const [searchQuery] = useSearchqueryState();
  const { geoLocation, boundaries, radius } = useGeoSearch();

  const filter = toDataDotFilter(formatNuqsState(state));

  const filterSearchParams: FilterSearchParams = normalizeFilterSearchParams({
    searchQuery: searchQuery || "",
    filter,
    geoLocation,
    boundaries,
    radius,
    subclient: client,
  });

  const form = useForm<NewsletterSchema>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
      subscriptionInterval: "daily",
    },
  });

  async function handleSubmit(data: NewsletterSchema) {
    const res = await fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({
        ...data,
        languageKey: locale,
        url: window.location.href,
        privacyUrl: t.newsletter_modal_privacy_linkURL,
        filterSearchParams,
      }),
      headers: { "content-type": "application/json" },
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(text);
    }

    return await res.json();
  }

  const { mutate, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (data: NewsletterSchema) => {
      await handleSubmit(data);
      form.reset();
    },
  });

  function onSubmit(data: NewsletterSchema) {
    mutate(data);
  }

  return (
    <div className="w-full">
      <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t.newsletter_modal_email}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t.newsletter_modal_email_placeholder}
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-destructive" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subscriptionInterval"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t.newsletter_modal_interval}</FormLabel>
                <FormControl>
                  <RadioGroup
                    className="flex gap-4"
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                  >
                    <FormItem className="flex items-center">
                      <FormControl>
                        <RadioGroupItem
                          className="sr-only"
                          id="daily"
                          value="daily"
                        />
                      </FormControl>
                      <FormLabel
                        className={cn(
                          buttonVariants({ variant: "default" }),
                          "min-w-32 cursor-pointer",
                          field.value === "daily" &&
                            "bg-secondary text-black dark:bg-secondary dark:text-black"
                        )}
                        htmlFor="daily"
                      >
                        {t.newsletter_modal_interval_daily}
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center">
                      <FormControl>
                        <RadioGroupItem
                          className="sr-only"
                          id="weekly"
                          value="weekly"
                        />
                      </FormControl>
                      <FormLabel
                        className={cn(
                          buttonVariants({ variant: "default" }),
                          "min-w-32 cursor-pointer",
                          field.value === "weekly" &&
                            "bg-secondary text-black dark:bg-secondary dark:text-black"
                        )}
                        htmlFor="weekly"
                      >
                        {t.newsletter_modal_interval_weekly}
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="privacy"
            render={({ field }) => (
              <FormItem className="flex space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-sm">
                    {t.newsletter_modal_privacy_text}
                  </FormLabel>
                  <FormDescription>
                    <CustomLink
                      blank
                      className={cn(
                        buttonVariants({
                          variant: "link",
                          className: "px-0 text-sm",
                        })
                      )}
                      href={t.newsletter_modal_privacy_linkURL}
                    >
                      {t.newsletter_modal_privacy_link}
                    </CustomLink>
                  </FormDescription>
                </div>
              </FormItem>
            )}
          />
          <Button disabled={isPending} type="submit">
            {t.newsletter_modal_submit}
          </Button>
          {isError && (
            <p
              className="text-destructive text-sm"
              ref={(node) => {
                setTimeout(() => {
                  node?.scrollIntoView({ behavior: "smooth" });
                }, 200);
              }}
            >
              {t.newsletter_modal_status_error_text}
            </p>
          )}
          {isSuccess && (
            <p
              className={cn("text-green-500 text-sm")}
              ref={(node) => {
                setTimeout(() => {
                  node?.scrollIntoView({ behavior: "smooth" });
                }, 200);
              }}
            >
              {t.newsletter_modal_status_success_text}
            </p>
          )}
        </form>
      </Form>
    </div>
  );
}
