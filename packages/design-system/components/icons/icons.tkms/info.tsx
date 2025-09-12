import type { SVGProps } from "react";

export function InfoIcon({
  className,
  color = "currentColor",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      id="icon"
      version="1.1"
      viewBox="0 0 354.3 354.3"
      x="0px"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      y="0px"
      {...props}
    >
      <title>Information</title>
      <g>
        <g>
          <path
            d="M177.2,14.9c-89.4,0-162.2,72.8-162.2,162.2s72.8,162.2,162.2,162.2c89.5,0,162.2-72.8,162.2-162.2    S266.6,14.9,177.2,14.9z M190.9,293h-28.7V123.8h28.7V293z M190.9,92.8h-28.7V63.5h28.7V92.8z"
            fill="white"
          />
          <rect fill={color} height="169.1" width="28.7" x="162.2" y="123.8" />
          <rect fill={color} height="29.3" width="28.7" x="162.2" y="63.5" />
        </g>
        <path
          d="M177.2,14c43.6,0,84.6,17,115.4,47.8c30.8,30.8,47.8,71.8,47.8,115.4s-17,84.6-47.8,115.4   s-71.8,47.8-115.4,47.8s-84.6-17-115.4-47.8C31,261.7,14,220.7,14,177.2S31,92.6,61.8,61.8C92.6,31,133.6,14,177.2,14 M177.2,0   C79.3,0,0,79.3,0,177.2s79.3,177.2,177.2,177.2S354.3,275,354.3,177.2S275,0,177.2,0L177.2,0z"
          fill={color}
        />
      </g>
    </svg>
  );
}
