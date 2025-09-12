import type { SVGProps } from "react";

export function YouTubeIcon({
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
      <title>YouTube</title>
      <path d="M12.24,6.4s-5,0-6.26.33c-.34.1-.64.28-.89.53-.25.25-.43.56-.52.89-.33,1.26-.33,3.85-.33,3.85,0,0,0,2.61.33,3.84.09.34.27.64.52.89.25.25.55.43.89.52,1.26.34,6.26.34,6.26.34,0,0,5.01,0,6.27-.33.34-.09.64-.27.89-.52s.42-.56.51-.89c.34-1.25.34-3.84.34-3.84,0,0,0-2.61-.34-3.86-.09-.34-.27-.64-.51-.89-.25-.25-.55-.42-.89-.51-1.26-.35-6.27-.35-6.27-.35ZM10.64,9.6l4.16,2.4-4.16,2.39v-4.79Z" />
    </svg>
  );
}
