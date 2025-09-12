import type { Meta, StoryObj } from '@storybook/nextjs';
import { Loader2, Mail } from 'lucide-react';

import { Badge } from '@repo/design-system/components/ui/badge';
import {
  ButtonTenantAware,
  type ButtonTenantAwareProps,
} from './button-tenant-aware';

// Import the AllVariants type
type AllVariants =
  | 'default'
  | 'destructive'
  | 'outline'
  | 'secondary'
  | 'ghost'
  | 'link'
  | 'social'
  | 'inline-link'
  | 'accent';

/**
 * Displays a button or a component that looks like a button.
 */
const meta = {
  title: 'design-system/Components/Button/Button',
  component: ButtonTenantAware,
  tags: ['autodocs'],
  args: {
    children: 'Button',
    variant: 'default',
    size: 'default',
    disabled: false,
  },
  parameters: {
    layout: 'centered',
    controls: {
      include: [
        'children',
        'variant',
        'size',
        'disabled',
        'backgroundColor',
        'textColor',
        'borderColor',
        'borderRadius',
        'fontSize',
        'fontWeight',
        'boxShadow',
      ],
    },
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'The content of the button',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'Button' },
      },
    },
    variant: {
      control: 'select',
      description: 'The visual style variant of the button (varies by tenant)',
      options: [
        'default',
        'secondary',
        'outline',
        'destructive',
        'ghost',
        'link',
        'social', // Base only
        'inline-link', // TKAG only
        'accent', // TKMS only
      ],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: 'select',
      description: 'The size of the button',
      options: ['default', 'sm', 'lg', 'icon', 'social'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    asChild: {
      control: 'boolean',
      description:
        'Change the default rendered element for the one passed as a child',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    // Custom styling controls
    backgroundColor: {
      control: 'color',
      description: 'Custom background color (overrides theme)',
      table: {
        type: { summary: 'string' },
        category: 'Custom Styling',
      },
    },
    textColor: {
      control: 'color',
      description: 'Custom text color (overrides theme)',
      table: {
        type: { summary: 'string' },
        category: 'Custom Styling',
      },
    },
    borderColor: {
      control: 'color',
      description: 'Custom border color (overrides theme)',
      table: {
        type: { summary: 'string' },
        category: 'Custom Styling',
      },
    },
    borderRadius: {
      control: 'select',
      description: 'Custom border radius (overrides theme)',
      options: [
        'rounded-none', // 0px
        'rounded-sm', // 2px
        'rounded', // 4px
        'rounded-md', // 6px
        'rounded-lg', // 8px
        'rounded-xl', // 12px
        'rounded-2xl', // 16px
        'rounded-3xl', // 24px
        'rounded-full', // 9999px
      ],
      table: {
        type: { summary: 'string' },
        category: 'Custom Styling',
      },
    },
    fontSize: {
      control: 'select',
      description: 'Custom font size (overrides theme)',
      options: [
        'none',
        'text-xs', // 12px
        'text-sm', // 14px
        'text-base', // 16px
        'text-lg', // 18px
        'text-xl', // 20px
        'text-2xl', // 24px
        'text-3xl', // 30px
        'text-4xl', // 36px
      ],
      table: {
        type: { summary: 'string' },
        category: 'Custom Styling',
      },
    },
    fontWeight: {
      control: 'select',
      description: 'Custom font weight (overrides theme)',
      options: [
        'none',
        'font-thin', // 100
        'font-extralight', // 200
        'font-light', // 300
        'font-normal', // 400
        'font-medium', // 500
        'font-semibold', // 600
        'font-bold', // 700
        'font-extrabold', // 800
        'font-black', // 900
      ],
      table: {
        type: { summary: 'string' },
        category: 'Custom Styling',
      },
    },
    boxShadow: {
      control: 'select',
      description: 'Custom box shadow (overrides theme)',
      options: [
        'none',
        'shadow-sm', // 0 1px 2px 0 rgb(0 0 0 / 0.05)
        'shadow', // 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)
        'shadow-md', // 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)
        'shadow-lg', // 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)
        'shadow-xl', // 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)
        'shadow-2xl', // 0 25px 50px -12px rgb(0 0 0 / 0.25)
        'shadow-inner', // inset 0 2px 4px 0 rgb(0 0 0 / 0.05)
      ],
      table: {
        type: { summary: 'string' },
        category: 'Custom Styling',
      },
    },
    // Hide internal props from controls
    className: {
      table: {
        disable: true,
      },
    },
    style: {
      table: {
        disable: true,
      },
    },
    onClick: {
      table: {
        disable: true,
      },
    },
    onMouseEnter: {
      table: {
        disable: true,
      },
    },
    onMouseLeave: {
      table: {
        disable: true,
      },
    },
    onFocus: {
      table: {
        disable: true,
      },
    },
    onBlur: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<ButtonTenantAwareProps>;

export default meta;

type Story = StoryObj<ButtonTenantAwareProps>;

/**
 * The default form of the button, used for primary actions and commands.
 */
export const Default: Story = {};

/**
 * Use the `outline` button to reduce emphasis on secondary actions, such as
 * canceling or dismissing a dialog.
 */
export const Outline: Story = {
  args: {
    variant: 'outline',
  },
};

/**
 * Use the `ghost` button is minimalistic and subtle, for less intrusive
 * actions.
 */
export const Ghost: Story = {
  args: {
    variant: 'ghost',
  },
};

/**
 * Use the `secondary` button to call for less emphasized actions, styled to
 * complement the primary button while being less conspicuous.
 */
export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

/**
 * Use the `destructive` button to indicate errors, alerts, or the need for
 * immediate attention.
 */
export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
};

/**
 * Use the `link` button to reduce emphasis on tertiary actions, such as
 * hyperlink or navigation, providing a text-only interactive element.
 */
export const Link: Story = {
  args: {
    variant: 'link',
  },
};

/**
 * Add the `disabled` prop to a button to prevent interactions and add a
 * loading indicator, such as a spinner, to signify an in-progress action.
 */
export const Loading: Story = {
  render: (args) => (
    <ButtonTenantAware {...args}>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Button
    </ButtonTenantAware>
  ),
  args: {
    ...Outline.args,
    disabled: true,
  },
};

/**
 * Add an icon element to a button to enhance visual communication and
 * providing additional context for the action.
 */
export const WithIcon: Story = {
  render: (args) => (
    <ButtonTenantAware {...args}>
      <Mail className="mr-2 h-4 w-4" /> Login with Email Button
    </ButtonTenantAware>
  ),
  args: {
    ...Secondary.args,
  },
};

/**
 * Use the `sm` size for a smaller button, suitable for interfaces needing
 * compact elements without sacrificing usability.
 */
export const Small: Story = {
  args: {
    size: 'sm',
  },
};

/**
 * Use the `lg` size for a larger button, offering better visibility and
 * easier interaction for users.
 */
export const Large: Story = {
  args: {
    size: 'lg',
  },
};

/**
 * Use the "icon" size for a button with only an icon.
 */
export const Icon: Story = {
  render: (args) => (
    <ButtonTenantAware {...args}>
      <Mail />
    </ButtonTenantAware>
  ),
  args: {
    ...Secondary.args,
    size: 'icon',
    children: <Mail />,
  },
};

/**
 * Add the `disabled` prop to prevent interactions with the button.
 */
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

/**
 * Multi-tenant demonstration - shows how buttons adapt to different tenants.
 * Use the toolbar to switch between tenants and see the changes.
 */
export const MultiTenantDemo: Story = {
  render: (args, { globals: { tenant } }) => {
    const currentTenant = tenant || 'base';

    // Get tenant-specific variants
    const getTenantVariants = (tenant: string) => {
      switch (tenant) {
        case 'tkag':
          return [
            'default',
            'secondary',
            'outline',
            'destructive',
            'ghost',
            'link',
            'inline-link',
          ];
        case 'tkms':
          return [
            'default',
            'secondary',
            'outline',
            'destructive',
            'accent',
            'ghost',
            'link',
          ];
        default:
          return [
            'default',
            'secondary',
            'outline',
            'destructive',
            'ghost',
            'link',
            'social',
          ];
      }
    };

    const variants = getTenantVariants(currentTenant);

    return (
      <div className="space-y-6">
        <div className="mb-4 text-muted-foreground text-sm">
          Tenant: <Badge variant="secondary">{currentTenant}</Badge>
        </div>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-4">
            {variants.map((variant) => (
              <ButtonTenantAware
                key={variant}
                {...args}
                variant={variant as AllVariants}
              >
                {variant.charAt(0).toUpperCase() +
                  variant.slice(1).replace('-', ' ')}
              </ButtonTenantAware>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <ButtonTenantAware {...args} size="sm">
              Small
            </ButtonTenantAware>
            <ButtonTenantAware {...args} size="default">
              Default
            </ButtonTenantAware>
            <ButtonTenantAware {...args} size="lg">
              Large
            </ButtonTenantAware>
            <ButtonTenantAware {...args} size="icon">
              <Mail className="h-4 w-4" />
            </ButtonTenantAware>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Multi-tenant demonstration - shows how buttons adapt to different tenants. Use the toolbar to switch between tenants and see the changes. Each tenant has different variants and styling.',
      },
    },
  },
};
