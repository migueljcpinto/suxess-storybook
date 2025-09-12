import type { SVGProps } from "react";

export function KununuIcon({
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
      <title>Kununu</title>
      <path d="M17.71,10.24s0-.06,0-.09c0,0,0,0,0-.01v-1.01s0,0,0,0v-.19s0,0,0,0h0s0-.01,0-.01c-.01-.22-.19-.39-.41-.39h-2.5c-.23,0-.41.18-.41.41v.19h0v.6c0,.88-.72,1.6-1.6,1.6h-1.1c-.5,0-.99.07-1.44.2v-7.09c0-.23-.18-.41-.41-.41h-2.5c-.23,0-.41.18-.41.41v15.15c0,.23.18.41.41.41h2.5c.23,0,.41-.18.41-.41v-3.4h0c0-.88.72-1.6,1.6-1.6h.94c.88,0,1.6.72,1.6,1.6v3.4c0,.07.02.14.05.19.07.13.21.22.36.22h2.5c.23,0,.41-.18.41-.41v-3.93c0-1.03-.39-1.97-1.04-2.71.65-.74,1.04-1.68,1.04-2.71h0Z" />
    </svg>
  );
}
