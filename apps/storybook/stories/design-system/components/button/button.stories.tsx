import type { Meta, StoryObj } from '@storybook/nextjs';
import { Loader2, Mail } from 'lucide-react';

import { Badge } from '@repo/design-system/components/ui/badge';
import { Button } from '@repo/design-system/components/ui/button';

/**
 * Displays a button or a component that looks like a button.
 */
const meta = {
  title: 'design-system/Components/Button/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Button',
    variant: 'default',
    size: 'default',
  },
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: {
      control: 'text',
    },
    variant: {
      control: 'select',
      options: [
        'default',
        'destructive',
        'outline',
        'secondary',
        'ghost',
        'link',
      ],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

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
    <Button {...args}>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Button
    </Button>
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
    <Button {...args}>
      <Mail className="mr-2 h-4 w-4" /> Login with Email Button
    </Button>
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
  render: (args, { globals: { tenant } }) => (
    <div className="space-y-6">
      <div className="mb-4 text-muted-foreground text-sm">
        Tenant: <Badge variant="secondary">{tenant || 'base'}</Badge>
      </div>
      <div className="space-y-4">
        <div className="flex flex-wrap gap-4">
          <Button {...args} variant="default">
            Primary
          </Button>
          <Button {...args} variant="secondary">
            Secondary
          </Button>
          <Button {...args} variant="outline">
            Outline
          </Button>
          <Button {...args} variant="destructive">
            Destructive
          </Button>
          <Button {...args} variant="ghost">
            Ghost
          </Button>
          <Button {...args} variant="link">
            Link
          </Button>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button {...args} size="sm">
            Small
          </Button>
          <Button {...args} size="default">
            Default
          </Button>
          <Button {...args} size="lg">
            Large
          </Button>
          <Button {...args} size="icon">
            <Mail className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Multi-tenant demonstration - shows how buttons adapt to different tenants. Use the toolbar to switch between tenants and see the changes.',
      },
    },
  },
};
