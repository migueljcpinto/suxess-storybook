import type { SVGProps } from "react";

export function FacebookIcon({
  className,
  color = "currentColor",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      fill={color}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Facebook</title>
      <path d="M19.44,4c.23,0,.46.09.62.26.17.17.26.39.26.62v14.23c0,.23-.09.46-.26.62-.17.17-.39.26-.62.26h-4.08v-6.2h2.08l.31-2.42h-2.39v-1.54c0-.7.19-1.18,1.2-1.18h1.28v-2.16c-.62-.07-1.24-.1-1.86-.1-1.84,0-3.11,1.13-3.11,3.19v1.78h-2.09v2.42h2.09v6.2h-7.66c-.23,0-.46-.09-.62-.26-.17-.17-.26-.39-.26-.62V4.88c0-.23.09-.46.26-.62.17-.17.39-.26.62-.26h14.23Z" />
    </svg>
  );
}
