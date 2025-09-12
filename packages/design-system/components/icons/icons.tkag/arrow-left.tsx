import type { SVGProps } from "react";

export function ArrowLeftIcon({
  className,
  color = "currentColor",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Arrow left</title>
      <path d="M19 12H5M5 12L10 7M5 12L10 17" stroke={color} strokeWidth="2" />
    </svg>
  );
}
