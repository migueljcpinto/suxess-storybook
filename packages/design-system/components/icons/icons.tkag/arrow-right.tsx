import type { SVGProps } from "react";

export function ArrowRightIcon({
  className,
  color = "currentColor",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      id="icon"
      version="1.1"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      {...props}
    >
      <title>Arrow Right</title>
      <path
        d="M5 12H19M19 12L14 7M19 12L14 17"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
