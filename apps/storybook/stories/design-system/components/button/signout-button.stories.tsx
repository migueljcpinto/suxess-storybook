import type { Meta, StoryObj } from '@storybook/react';
import { SignOut } from './auth-buttons';

const meta: Meta<typeof SignOut> = {
  title: 'Design System/Components/Button/SignOut',
  component: SignOut,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Logout button that redirects the user to the login page. Uses the Next.js Router for navigation.',
      },
    },
    nextjs: {
      router: {
        pathname: '/dashboard',
        query: {},
        push: () => Promise.resolve(true),
      },
    },
  },
  argTypes: {
    variant: {
      description: 'Visual variant of the button',
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
      description: 'Size of the button',
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
    },
    disabled: {
      description: 'If the button is disabled',
      control: 'boolean',
    },
    className: {
      description: 'Additional CSS classes',
      control: 'text',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SignOut>;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'default',
  },
};
