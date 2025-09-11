import type * as React from 'react';

interface Icon {
  size?: number;
  color?: string;
  className?: string;
}

export type SVGProps = {
  width?: string;
  color?: string;
  className?: string;
  outline?: boolean;
} & React.SVGProps<SVGSVGElement>;

export function Cancel({ className }: SVGProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      height="24"
      viewBox="0 0 20 20"
      width="24"
    >
      <title>Cancel</title>
      <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z" />
    </svg>
  );
}

export function ArrowRight({ width, color, className }: SVGProps) {
  return (
    <svg
      className={className}
      fill={color}
      viewBox="0 0 20 20"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Arrow Right</title>
      <path
        clipRule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export function Bubble({
  height = 45,
  color = '#ffffff',
}: {
  height?: number;
  color?: string;
}) {
  return (
    <svg
      height={height}
      style={{ fill: color }}
      viewBox="0 0 120 120" // Die Höhe wird hier eingestellt.
      xmlns="http://www.w3.org/2000/svg" // Die Farbe wird hier über den Stil eingestellt.
    >
      <title>Bubble</title>
      <path d="M54.7 66.1l-.1-2c-.3-7.2 8.1-8.4 8.1-15.5 0-3.4-1.7-4.8-4.8-4.8-1.3 0-2.7.3-3.9.7l-1.4.5c-1 .3-1.3-.1-1.6-1.2l-.4-1.9c-.3-.7 0-1.5.6-1.8.1 0 .2-.1.3-.1l1.7-.8c2-.8 4.1-1.2 6.3-1.1 6.3 0 10.3 3.4 10.3 9.9 0 9.3-8.5 10.4-8.7 16.3l-.1 1.8c-.1 1-.6 1.8-2.6 1.8h-1c-2.2 0-2.7-.8-2.7-1.8zm-.8 12.3c0-2.1 1.7-3.9 3.8-3.9 2.1 0 3.9 1.7 3.9 3.8 0 2.1-1.7 3.9-3.8 3.9h-.1c-2 .1-3.7-1.4-3.8-3.4v-.4zM60 0C26.9 0 0 26.8 0 60c0 13.3 4.4 26.2 12.5 36.7l-12 18.7c-.6 1-.6 2.2-.1 3.1 0 .1.1.1.1.2.7 1 1.9 1.5 3.1 1.3l30.2-6c19.1 9.3 41.7 7.8 59.4-3.9 1.4-.9 1.8-2.8.8-4.2-.9-1.4-2.8-1.8-4.2-.8-16.2 10.7-36.9 11.9-54.3 3.1-.7-.4-1.5-.4-2.3-.2-.1 0-23.9 4.7-23.9 4.7l9.4-14.6c.6-1 .7-2.3 0-3.3l-.4-.5c-19-23-15.7-57 7.3-76s57-15.7 76 7.3c8 9.7 12.3 21.8 12.3 34.3 0 12.2-4.1 24-11.7 33.5-1 1.3-.8 3.2.5 4.2s3.2.8 4.2-.5c8.4-10.6 13-23.7 13-37.3C120 26.9 93.1 0 60 0z" />
    </svg>
  );
}

export function ChevronLeft(props: SVGProps) {
  return (
    <svg
      fill="#fff"
      height="32"
      viewBox="0 0 384 512"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Chevron Left</title>
      <g fill="currentColor" fillRule="evenodd">
        <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
      </g>
    </svg>
  );
}

export function ChevronRight(props: SVGProps) {
  return (
    <svg
      fill="#fff"
      height="32"
      viewBox="0 0 384 512"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Chevron Right</title>
      <g fill="currentColor" fillRule="evenodd">
        <path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
      </g>
    </svg>
  );
}

export function Mail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>Mail</title>
      <path
        d="M25 6H7c-2.2 0-4 1.8-4 4v12c0 2.2 1.8 4 4 4h18c2.2 0 4-1.8 4-4V10c0-2.2-1.8-4-4-4zM7 8h18c.7 0 1.3.3 1.7.9-3.4 3.6-6.8 6.3-10.7 8.7-3.8-2.4-7.2-5.2-10.7-8.7a1.95 1.95 0 0 1 1.527-.894L7 8zm18 16H7c-1.1 0-2-.9-2-2V11.4c3.2 3.2 6.4 5.7 9.9 7.9.3.2.7.3 1.1.3.4 0 .7-.1 1.1-.3 3.6-2.2 6.8-4.8 9.9-7.9V22c0 1.1-.9 2-2 2z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export function MyLocation({ className }: SVGProps) {
  return (
    <svg
      aria-hidden
      className={className}
      height={20}
      viewBox="0 0 24 24"
      width={20}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>My Location</title>
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" />
    </svg>
  );
}

export function SortAsc({ width, color, className }: SVGProps) {
  return (
    <svg
      aria-hidden
      className={className}
      color={color}
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={0.5}
      viewBox="0 0 20 20"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Sort Asc</title>
      <path
        clipRule="evenodd"
        d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export function SortDesc({ width, color, className }: SVGProps) {
  return (
    <svg
      className={className}
      fill={color}
      viewBox="0 0 20 20"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Sort Dsc</title>
      <path
        clipRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export function SortNone(props: SVGProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Sort None</title>
      <path
        clipRule="evenodd"
        d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export function Star({ outline, ...props }: SVGProps) {
  return (
    <svg
      color="currentColor"
      fill="currentColor"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Star</title>
      {outline ? (
        <path d="M29.223 12.85c-.128-.394-.538-1.066-1.852-1.137l-7.144-.385-2.574-6.675c-.473-1.227-1.239-1.41-1.653-1.41s-1.18.183-1.652 1.41l-2.574 6.675-7.145.385c-1.313.071-1.724.743-1.852 1.136-.128.394-.19 1.179.83 2.008l5.554 4.511-1.842 6.913c-.337 1.272.174 1.87.51 2.113.333.244 1.059.545 2.164-.168L16 24.336l6.007 3.89c.514.333.948.445 1.297.445.4 0 .69-.147.868-.277.335-.243.847-.841.509-2.113l-1.842-6.913 5.555-4.511c1.02-.83.958-1.614.829-2.008z" />
      ) : (
        <path d="M23.304 28.67c-.349 0-.782-.111-1.297-.444L16 24.336l-6.006 3.89c-1.103.714-1.83.413-2.166.169-.336-.245-.847-.842-.509-2.114l1.842-6.913-5.554-4.511c-1.02-.83-.958-1.614-.83-2.007.128-.394.538-1.066 1.851-1.137l7.145-.385 2.574-6.676c.474-1.226 1.239-1.41 1.653-1.41s1.18.184 1.652 1.41l2.574 6.676 7.145.385c1.313.071 1.724.743 1.852 1.136.128.394.19 1.179-.83 2.008l-5.554 4.511 1.842 6.913c.337 1.272-.174 1.87-.51 2.113a1.46 1.46 0 0 1-.867.277zM5.329 13.68l5.595 4.545a1 1 0 0 1 .336 1.034l-1.856 6.967 6.052-3.92a1.005 1.005 0 0 1 1.087 0l6.052 3.919-1.856-6.966c-.1-.381.03-.786.336-1.034l5.597-4.545-7.2-.388a1 1 0 0 1-.878-.64L16 5.926l-2.594 6.727a1 1 0 0 1-.88.639l-7.198.388zM16.34 5.125zm-.68 0z" />
      )}
    </svg>
  );
}

export function Share({ className, size = 24, color = 'currentColor' }: Icon) {
  return (
    <svg
      className={className}
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Share</title>
      <path
        d="M14 5v4C7 10 4 15 3 20c2.5-3.5 6-5.1 11-5.1V19l7-7zm2 4.83L18.17 12L16 14.17V12.9h-2c-2.07 0-3.93.38-5.66.95c1.4-1.39 3.2-2.48 5.94-2.85l1.72-.27z"
        fill={color}
      />
    </svg>
  );
}

export function Close({ className }: { className: string }) {
  return (
    <svg
      className={className}
      fill="none"
      height="24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Close menu</title>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export function Menu({ className }: { className: string }) {
  return (
    <svg
      className={className}
      fill="none"
      height="24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Open menu</title>
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

export function ChevronDownCompact({
  className,
  size = 24,
  color = 'none',
}: Icon) {
  return (
    <svg
      aria-label="Chevron Down Compact"
      className={className}
      height={size}
      role="img"
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Chevron Down Compact</title>
      <path
        d="m4 11l8 3l8-3"
        fill={color}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
