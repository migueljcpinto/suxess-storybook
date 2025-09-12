import { Button } from '@repo/design-system/components/ui/button';
import { cn } from '@repo/design-system/lib/utils';
import * as React from 'react';

// Union type for all possible variants across tenants
type AllVariants =
  | 'default'
  | 'destructive'
  | 'outline'
  | 'secondary'
  | 'ghost'
  | 'link'
  | 'social' // Base
  | 'inline-link' // TKAG
  | 'accent'; // TKMS

type AllSizes = 'default' | 'sm' | 'lg' | 'icon' | 'social'; // Base

export interface ButtonTenantAwareProps extends React.ComponentProps<'button'> {
  asChild?: boolean;
  variant?: AllVariants;
  size?: AllSizes;
  tenant?: 'base' | 'tkag' | 'tkms';
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
 * A tenant-aware button component that adapts its styling based on the selected tenant.
 * This component simulates the different Button implementations used in each tenant's codebase.
 */
function ButtonTenantAware({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  tenant,
  backgroundColor,
  textColor,
  borderColor,
  borderRadius,
  fontSize,
  fontWeight,
  boxShadow,
  style,
  ...props
}: ButtonTenantAwareProps) {
  // Auto-detect tenant from parent element's class
  const [detectedTenant, setDetectedTenant] = React.useState<
    'base' | 'tkag' | 'tkms'
  >('base');

  React.useEffect(() => {
    // Find the parent element with tenant class
    const findTenantFromParent = () => {
      // Look for the tenant class in the document body
      const body = document.body;
      if (body.classList.contains('tenant-base')) {
        setDetectedTenant('base');
        return;
      }
      if (body.classList.contains('tenant-tkag')) {
        setDetectedTenant('tkag');
        return;
      }
      if (body.classList.contains('tenant-tkms')) {
        setDetectedTenant('tkms');
        return;
      }

      // Fallback: look for tenant class in any parent element
      const element = document.querySelector('[class*="tenant-"]');
      if (element) {
        if (element.classList.contains('tenant-base')) {
          setDetectedTenant('base');
        } else if (element.classList.contains('tenant-tkag')) {
          setDetectedTenant('tkag');
        } else if (element.classList.contains('tenant-tkms')) {
          setDetectedTenant('tkms');
        }
      }
    };

    findTenantFromParent();

    // Listen for changes in the DOM
    const observer = new MutationObserver(findTenantFromParent);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class'],
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  // Use provided tenant or detected tenant
  const currentTenant = tenant || detectedTenant;
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

  // Get tenant-specific classes
  const getTenantClasses = (tenant: string, variant: string) => {
    const baseClasses = [];

    // Apply tenant-specific base classes
    if (tenant === 'tkag' || tenant === 'tkms') {
      baseClasses.push('rounded-full', 'cursor-pointer');
    }

    // Apply variant-specific classes for each tenant
    if (tenant === 'tkag') {
      switch (variant) {
        case 'default':
          baseClasses.push(
            'bg-brand',
            'text-green-500',
            'text-white',
            'hover:bg-primary-foreground'
          );
          break;
        case 'outline':
          baseClasses.push(
            'border-brand',
            'bg-transparent',
            'text-base',
            'text-primary-foreground',
            'hover:border-black',
            'hover:bg-black',
            'hover:text-white'
          );
          break;
        case 'link':
          baseClasses.push(
            'after-underline',
            'overflow-hidden',
            'whitespace-normal',
            'rounded-none'
          );
          break;
        case 'inline-link':
          baseClasses.push(
            'overflow-hidden',
            'whitespace-normal',
            'rounded-none',
            'text-brand',
            'underline',
            'hover:decoration-brand'
          );
          break;
      }
    } else if (tenant === 'tkms') {
      switch (variant) {
        case 'default':
          baseClasses.push('bg-primary', 'text-secondary');
          break;
        case 'outline':
          baseClasses.push(
            'bg-muted',
            'text-muted-foreground',
            'hover:bg-accent'
          );
          break;
        case 'accent':
          baseClasses.push(
            'bg-accent',
            'text-accent-foreground',
            'hover:bg-accent/80'
          );
          break;
        case 'link':
          baseClasses.push(
            'after-underline',
            'overflow-hidden',
            'rounded-none',
            'text-base'
          );
          break;
      }
    }

    return baseClasses.join(' ');
  };

  // Filter variant and size based on tenant capabilities
  const getValidVariant = (variant: AllVariants, tenant: string) => {
    if (tenant === 'tkag' && variant === 'social') return 'default';
    if (tenant === 'tkag' && variant === 'accent') return 'default';
    if (tenant === 'tkms' && variant === 'social') return 'default';
    if (tenant === 'tkms' && variant === 'inline-link') return 'default';
    if (tenant === 'base' && variant === 'inline-link') return 'default';
    if (tenant === 'base' && variant === 'accent') return 'default';
    return variant;
  };

  const getValidSize = (size: AllSizes, tenant: string) => {
    if (tenant !== 'base' && size === 'social') return 'default';
    return size;
  };

  const validVariant = getValidVariant(variant, currentTenant);
  const validSize = getValidSize(size, currentTenant);
  const tenantClasses = getTenantClasses(currentTenant, validVariant);

  return (
    <Button
      className={cn(tenantClasses, customClasses, className)}
      style={customStyles}
      variant={
        validVariant === 'social'
          ? 'default'
          : (validVariant as
              | 'default'
              | 'secondary'
              | 'outline'
              | 'destructive'
              | 'ghost'
              | 'link')
      }
      size={
        validSize === 'social'
          ? 'default'
          : (validSize as 'default' | 'sm' | 'lg' | 'icon')
      }
      asChild={asChild}
      {...props}
    />
  );
}

export { ButtonTenantAware };
