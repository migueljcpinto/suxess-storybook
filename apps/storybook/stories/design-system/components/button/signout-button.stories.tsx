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
          'Botão de logout que redireciona o usuário para a página de login. Utiliza o Next.js Router para navegação.',
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
      description: 'Variante visual do botão',
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
      description: 'Tamanho do botão',
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
    },
    disabled: {
      description: 'Se o botão está desabilitado',
      control: 'boolean',
    },
    className: {
      description: 'Classes CSS adicionais',
      control: 'text',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SignOut>;

// Story básica
export const Default: Story = {
  args: {
    variant: 'default',
    size: 'default',
  },
};
