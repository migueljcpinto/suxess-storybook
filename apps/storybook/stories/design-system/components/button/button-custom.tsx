import { Button } from '@repo/design-system/components/ui/button';
import { cn } from '@repo/design-system/lib/utils';
import type * as React from 'react';

// Extended interface for custom styling properties
export interface ButtonCustomizableProps
  extends React.ComponentProps<'button'> {
  asChild?: boolean;
  variant?:
    | 'default'
    | 'secondary'
    | 'outline'
    | 'destructive'
    | 'ghost'
    | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  // Custom styling properties for Storybook controls
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  borderRadius?: string;
  fontSize?: string;
  fontWeight?: string;
  boxShadow?: string;
}

/**
 * A customizable button component that extends the base shadcn/ui Button
 * with additional styling properties for Storybook controls and design system flexibility.
 *
 * This component is designed for:
 * - Storybook documentation and testing
 * - Design system exploration
 * - Rapid prototyping
 * - Theme customization
 *
 * For production use, prefer the base Button component unless you need
 * the additional customization capabilities.
 */
function ButtonCustomizable({
  className,
  variant,
  size,
  asChild = false,
  backgroundColor,
  textColor,
  borderColor,
  borderRadius,
  fontSize,
  fontWeight,
  boxShadow,
  style,
  ...props
}: ButtonCustomizableProps) {
  // Build custom styles object
  const customStyles: React.CSSProperties = {
    ...style,
    ...(backgroundColor && { backgroundColor }),
    ...(textColor && { color: textColor }),
    ...(borderColor && { borderColor }),
  };

  // Build custom classes
  const customClasses = [borderRadius, fontSize, fontWeight, boxShadow]
    .filter(Boolean)
    .join(' ');

  return (
    <Button
      className={cn(customClasses, className)}
      style={customStyles}
      variant={variant}
      size={size}
      asChild={asChild}
      {...props}
    />
  );
}

export { ButtonCustomizable };
