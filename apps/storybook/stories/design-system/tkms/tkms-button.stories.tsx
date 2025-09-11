import { Badge } from '@repo/design-system/components/ui/badge';
import { Button } from '@repo/design-system/components/ui/button';
import type { Meta, StoryObj } from '@storybook/react';

// Import TKMS specific styles
import '@repo/design-system/styles/globals.tkms.css';

const meta: Meta<typeof Button> = {
  title: 'design-system/tkms/Button',
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
    children: 'TKMS Primary Button',
    variant: 'default',
  },
};

export const Secondary: Story = {
  args: {
    children: 'TKMS Secondary Button',
    variant: 'secondary',
  },
};

export const WithBadge: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Button variant="outline">TKMS Action</Button>
      <Badge variant="secondary">TKMS</Badge>
    </div>
  ),
};

export const TKMSBrand: Story = {
  args: {
    children: 'TKMS Brand Button',
    className: 'bg-primary text-primary-foreground hover:bg-primary/90',
  },
};

export const TKMSOutline: Story = {
  args: {
    children: 'TKMS Outline Button',
    className:
      'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground',
  },
};
