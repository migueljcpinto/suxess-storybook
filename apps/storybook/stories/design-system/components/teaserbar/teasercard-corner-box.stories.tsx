import type { Meta, StoryObj } from '@storybook/react';
import { CornerBox } from './teasercard-corner-box';

const meta: Meta<typeof CornerBox> = {
  title: 'Design System/Components/TeaserBar/CornerBox',
  component: CornerBox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'CornerBox é um átomo que adiciona bordas decorativas nos cantos de um elemento. Usado para criar um efeito visual de moldura nos cantos.',
      },
    },
  },
  argTypes: {
    children: {
      description: 'Conteúdo que será envolvido pela moldura de cantos',
      control: false,
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CornerBox>;

// Story básica
export const Default: Story = {
  args: {
    children: (
      <div className="flex h-32 w-32 items-center justify-center bg-gray-100">
        <span className="text-gray-600">Conteúdo</span>
      </div>
    ),
  },
};

// Story com imagem
export const WithImage: Story = {
  args: {
    children: (
      <div className="flex h-48 w-64 items-center justify-center bg-gradient-to-br from-blue-400 to-purple-500">
        <span className="font-semibold text-white">Imagem de Exemplo</span>
      </div>
    ),
  },
};

// Story com texto
export const WithText: Story = {
  args: {
    children: (
      <div className="border border-gray-200 bg-white p-6">
        <h3 className="mb-2 font-semibold text-lg">Título do Card</h3>
        <p className="text-gray-600">
          Este é um exemplo de conteúdo de texto dentro do CornerBox.
        </p>
      </div>
    ),
  },
};

// Story com diferentes tamanhos
export const DifferentSizes: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <CornerBox>
        <div className="flex h-16 w-16 items-center justify-center bg-red-100">
          <span className="text-xs">Pequeno</span>
        </div>
      </CornerBox>
      <CornerBox>
        <div className="flex h-24 w-24 items-center justify-center bg-green-100">
          <span className="text-sm">Médio</span>
        </div>
      </CornerBox>
      <CornerBox>
        <div className="flex h-32 w-32 items-center justify-center bg-blue-100">
          <span className="text-base">Grande</span>
        </div>
      </CornerBox>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstra o CornerBox com diferentes tamanhos de conteúdo.',
      },
    },
  },
};

// Story demonstrando uso em contexto
export const InContext: Story = {
  render: () => (
    <div className="max-w-md">
      <CornerBox>
        <div className="relative overflow-hidden">
          <div className="flex h-48 w-full items-center justify-center bg-gradient-to-r from-purple-400 to-pink-400">
            <span className="font-bold text-white text-xl">Imagem</span>
          </div>
        </div>
      </CornerBox>
      <div className="pt-4">
        <h4 className="mb-2 font-semibold text-xl">Título do Card</h4>
        <p className="text-gray-600">
          Descrição do conteúdo que será exibido no card.
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Demonstra como o CornerBox é usado em contexto real, similar ao TeaserCard.',
      },
    },
  },
};
