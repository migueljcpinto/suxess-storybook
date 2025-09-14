  "use client";


import Link from "next/link";
import type { ComponentProps } from "react";


  const allowedTrackingParams = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
    "sType",
    "source",
  ];

  type CustomLinkProps = ComponentProps<typeof Link> & {
    href: string;
    blank?: boolean;
    locale?: string;
    prefetch?: boolean;
    passParams?: boolean;
  };

  export function CustomLink({
    children,
    target,
    blank,
    href,
    passParams,
    locale,
    ...props
  }: CustomLinkProps) {
    let searchParams = "";

    if (passParams) {
      const newSearchParams = handleParams();
      searchParams = newSearchParams?.length ? `?${newSearchParams}` : "";
    }

    const url = isAbsoluteURL(href)
      ? `${href}${searchParams}`
      : `${addLocale(href, locale ? locale : undefined)}${searchParams}`;

    if (target === "_blank" || blank) {
      return (
        <a href={url} rel="noopener" target="_blank" {...props}>
          {children}
        </a>
      );
    }

    return (
      <Link href={url} {...props}>
        {children}
      </Link>
    );
  }

  function isAbsoluteURL(url: string) {
    try {
      const urlObj = new URL(url);
      return urlObj.protocol !== "";
    } catch (_error) {
      return false;
    }
  }

  function addLocale(href: string, loc?: string) {
    if (!loc) {
      return href;
    }

    return `/${loc}${href}`;
  }

  function handleParams() {
    if (typeof window !== "undefined") {
      const search_params = new URLSearchParams(window.location.search);
      const new_params = new URLSearchParams();
      search_params.forEach((value, param) => {
        if (!allowedTrackingParams.includes(param)) {
          return;
        }
        new_params.append(param, value);
      });

      return new_params.toString();
    }
  }
