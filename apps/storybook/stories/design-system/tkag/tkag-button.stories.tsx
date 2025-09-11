import { Badge } from '@repo/design-system/components/ui/badge';
import { Button } from '@repo/design-system/components/ui/button';
import type { Meta, StoryObj } from '@storybook/react';

// Import TKAG specific styles
import '@repo/design-system/styles/globals.tkag.css';

const meta: Meta<typeof Button> = {
  title: 'design-system/tkag/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
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
      control: { type: 'select' },
      options: ['default', 'sm', 'lg', 'icon'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'TKAG Primary Button',
    variant: 'default',
  },
};

export const Secondary: Story = {
  args: {
    children: 'TKAG Secondary Button',
    variant: 'secondary',
  },
};

export const WithBadge: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Button variant="outline">TKAG Action</Button>
      <Badge variant="secondary">TKAG</Badge>
    </div>
  ),
};

export const TKAGBrand: Story = {
  args: {
    children: 'TKAG Brand Button',
    className: 'bg-brand text-white hover:bg-brand/90',
  },
};

export const TKAGOutline: Story = {
  args: {
    children: 'TKAG Outline Button',
    className:
      'border-2 border-brand text-brand hover:bg-brand hover:text-white',
  },
};
