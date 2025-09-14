import type { Meta, StoryObj } from '@storybook/react';
import TeaserBarWrapper from './teaserbar-wrapper';

const meta: Meta<typeof TeaserBarWrapper> = {
  title: 'Design System/Components/TeaserBar/TeaserBarWrapper',
  component: TeaserBarWrapper,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'TeaserBarWrapper é uma molécula que fornece o layout e estrutura para uma seção de teasers. Inclui título e grid responsivo para os cards.',
      },
    },
  },
  argTypes: {
    headline: {
      description: 'Título da seção de teasers',
      control: 'text',
    },
    children: {
      description: 'Conteúdo dos teasers (geralmente TeaserCards)',
      control: false,
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TeaserBarWrapper>;

// Story básica
export const Default: Story = {
  args: {
    headline: 'Seção de Teasers',
    children: (
      <>
        <div className="flex h-48 items-center justify-center rounded-lg bg-blue-100">
          <span className="font-semibold text-blue-600">Teaser 1</span>
        </div>
        <div className="flex h-48 items-center justify-center rounded-lg bg-green-100">
          <span className="font-semibold text-green-600">Teaser 2</span>
        </div>
        <div className="flex h-48 items-center justify-center rounded-lg bg-purple-100">
          <span className="font-semibold text-purple-600">Teaser 3</span>
        </div>
      </>
    ),
  },
};

// Story com título personalizado
export const CustomHeadline: Story = {
  args: {
    headline: 'Oportunidades de Carreira',
    children: (
      <>
        <div className="flex h-48 items-center justify-center rounded-lg bg-gradient-to-br from-blue-400 to-blue-600">
          <span className="font-bold text-white text-xl">Vagas Abertas</span>
        </div>
        <div className="flex h-48 items-center justify-center rounded-lg bg-gradient-to-br from-green-400 to-green-600">
          <span className="font-bold text-white text-xl">Programas</span>
        </div>
        <div className="flex h-48 items-center justify-center rounded-lg bg-gradient-to-br from-purple-400 to-purple-600">
          <span className="font-bold text-white text-xl">Eventos</span>
        </div>
      </>
    ),
  },
};

// Story com conteúdo real (simulando TeaserCards)
export const WithTeaserCards: Story = {
  args: {
    headline: 'Teaserbar TKAG',
    children: (
      <>
        <div className="group cursor-pointer">
          <div className="relative mb-4 overflow-hidden rounded-lg">
            <div className="flex h-48 w-full items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
              <span className="font-bold text-white text-xl">Imagem 1</span>
            </div>
          </div>
          <h4 className="mb-4 font-semibold text-2xl">Dicas de Candidatura</h4>
          <p className="text-gray-600">
            Aprenda como se destacar no processo seletivo.
          </p>
        </div>

        <div className="group cursor-pointer">
          <div className="relative mb-4 overflow-hidden rounded-lg">
            <div className="flex h-48 w-full items-center justify-center bg-gradient-to-r from-green-500 to-teal-600">
              <span className="font-bold text-white text-xl">Imagem 2</span>
            </div>
          </div>
          <h4 className="mb-4 font-semibold text-2xl">
            Oportunidades no Setor Energético
          </h4>
          <p className="text-gray-600">
            Descubra as melhores oportunidades disponíveis.
          </p>
        </div>

        <div className="group cursor-pointer">
          <div className="relative mb-4 overflow-hidden rounded-lg">
            <div className="flex h-48 w-full items-center justify-center bg-gradient-to-r from-orange-500 to-red-600">
              <span className="font-bold text-white text-xl">Imagem 3</span>
            </div>
          </div>
          <h4 className="mb-4 font-semibold text-2xl">Newsletter</h4>
          <p className="text-gray-600">
            Mantenha-se atualizado com nossas novidades.
          </p>
        </div>
      </>
    ),
  },
};

// Story demonstrando responsividade
export const ResponsiveLayout: Story = {
  args: {
    headline: 'Layout Responsivo',
    children: (
      <>
        <div className="flex h-32 items-center justify-center rounded-lg bg-blue-100 md:h-48">
          <span className="font-semibold text-blue-600">Mobile: 1 coluna</span>
        </div>
        <div className="flex h-32 items-center justify-center rounded-lg bg-green-100 md:h-48">
          <span className="font-semibold text-green-600">
            Desktop: 3 colunas
          </span>
        </div>
        <div className="flex h-32 items-center justify-center rounded-lg bg-purple-100 md:h-48">
          <span className="font-semibold text-purple-600">Grid Adaptativo</span>
        </div>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          'Demonstra como o layout se adapta de 1 coluna no mobile para 3 colunas no desktop.',
      },
    },
  },
};

// Story com diferentes quantidades de conteúdo
export const DifferentContentAmounts: Story = {
  render: () => (
    <div className="space-y-12">
      <div>
        <h3 className="mb-4 font-semibold text-lg">2 Cards</h3>
        <TeaserBarWrapper headline="Dois Teasers">
          <div className="flex h-48 items-center justify-center rounded-lg bg-blue-100">
            <span className="font-semibold text-blue-600">Card 1</span>
          </div>
          <div className="flex h-48 items-center justify-center rounded-lg bg-green-100">
            <span className="font-semibold text-green-600">Card 2</span>
          </div>
        </TeaserBarWrapper>
      </div>

      <div>
        <h3 className="mb-4 font-semibold text-lg">3 Cards (Padrão)</h3>
        <TeaserBarWrapper headline="Três Teasers">
          <div className="flex h-48 items-center justify-center rounded-lg bg-blue-100">
            <span className="font-semibold text-blue-600">Card 1</span>
          </div>
          <div className="flex h-48 items-center justify-center rounded-lg bg-green-100">
            <span className="font-semibold text-green-600">Card 2</span>
          </div>
          <div className="flex h-48 items-center justify-center rounded-lg bg-purple-100">
            <span className="font-semibold text-purple-600">Card 3</span>
          </div>
        </TeaserBarWrapper>
      </div>

      <div>
        <h3 className="mb-4 font-semibold text-lg">4 Cards</h3>
        <TeaserBarWrapper headline="Quatro Teasers">
          <div className="flex h-48 items-center justify-center rounded-lg bg-blue-100">
            <span className="font-semibold text-blue-600">Card 1</span>
          </div>
          <div className="flex h-48 items-center justify-center rounded-lg bg-green-100">
            <span className="font-semibold text-green-600">Card 2</span>
          </div>
          <div className="flex h-48 items-center justify-center rounded-lg bg-purple-100">
            <span className="font-semibold text-purple-600">Card 3</span>
          </div>
          <div className="flex h-48 items-center justify-center rounded-lg bg-orange-100">
            <span className="font-semibold text-orange-600">Card 4</span>
          </div>
        </TeaserBarWrapper>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Demonstra como o wrapper se comporta com diferentes quantidades de conteúdo.',
      },
    },
  },
};

// Story com tema escuro
export const DarkTheme: Story = {
  args: {
    headline: 'Teaserbar em Tema Escuro',
    children: (
      <>
        <div className="flex h-48 items-center justify-center rounded-lg bg-gray-800">
          <span className="font-semibold text-white">Card Escuro 1</span>
        </div>
        <div className="flex h-48 items-center justify-center rounded-lg bg-gray-700">
          <span className="font-semibold text-white">Card Escuro 2</span>
        </div>
        <div className="flex h-48 items-center justify-center rounded-lg bg-gray-600">
          <span className="font-semibold text-white">Card Escuro 3</span>
        </div>
      </>
    ),
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    docs: {
      description: {
        story: 'Demonstra o wrapper em tema escuro.',
      },
    },
  },
};
