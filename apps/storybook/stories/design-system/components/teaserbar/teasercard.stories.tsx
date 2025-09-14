import type { Meta, StoryObj } from '@storybook/react';
import { TeaserCard } from './teasercard';

const meta: Meta<typeof TeaserCard> = {
  title: 'Design System/Components/TeaserBar/TeaserCard',
  component: TeaserCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'TeaserCard é uma molécula que combina imagem, CornerBox e conteúdo. Pode ser usado como link ou botão, com efeitos de hover e animações.',
      },
    },
  },
  argTypes: {
    src: {
      description: 'URL da imagem do card',
      control: 'text',
    },
    href: {
      description: 'URL de destino (se usado como link)',
      control: 'text',
    },
    onClick: {
      description: 'Função de callback (se usado como botão)',
      action: 'clicked',
    },
    onMouseEnter: {
      description: 'Função de callback para mouse enter',
      action: 'mouseEnter',
    },
    children: {
      description: 'Conteúdo do card (título, descrição, etc.)',
      control: false,
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TeaserCard>;

// Story básica como link
export const AsLink: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=266&fit=crop',
    href: 'https://example.com',
    children: (
      <>
        <h4 className="mb-4 font-semibold text-3xl transition-colors duration-500 group-hover:text-ring">
          Título do Card
        </h4>
        <p className="text-gray-600 text-lg transition-colors duration-500 group-hover:text-gray-800">
          Descrição do conteúdo que será exibido no card.
        </p>
      </>
    ),
  },
};

// Story como botão
export const AsButton: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=266&fit=crop',
    onClick: () => console.log('Card clicado!'),
    onMouseEnter: () => console.log('Mouse sobre o card'),
    children: (
      <>
        <h4 className="mb-4 font-semibold text-3xl transition-colors duration-500 group-hover:text-ring">
          Card Interativo
        </h4>
        <p className="text-gray-600 text-lg transition-colors duration-500 group-hover:text-gray-800">
          Clique para interagir com este card.
        </p>
      </>
    ),
  },
};

// Story com conteúdo complexo
export const WithComplexContent: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=266&fit=crop',
    href: 'https://example.com',
    children: (
      <>
        <h4 className="mb-4 font-semibold text-3xl transition-colors duration-500 group-hover:text-ring">
          Oportunidades no Setor Energético
        </h4>
        <p className="mb-4 text-gray-600 transition-colors duration-500 group-hover:text-gray-800">
          Descubra as melhores oportunidades de carreira no setor energético.
        </p>
        <div className="flex items-center font-medium text-brand text-lg transition-colors duration-500 group-hover:text-ring">
          <span>Mais informações</span>
          <svg
            className="ml-2 h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </>
    ),
  },
};

// Story com newsletter
export const NewsletterCard: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=266&fit=crop',
    onClick: () => console.log('Newsletter clicado!'),
    onMouseEnter: () => console.log('Mouse sobre newsletter'),
    children: (
      <>
        <h4 className="mb-4 font-semibold text-3xl transition-colors duration-500 group-hover:text-ring">
          Inscreva-se na nossa newsletter
        </h4>
        <p className="text-gray-600 text-lg transition-colors duration-500 group-hover:text-gray-800">
          Receba as últimas notícias e oportunidades diretamente no seu email.
        </p>
      </>
    ),
  },
};

// Story com diferentes imagens
export const DifferentImages: Story = {
  render: () => (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      <TeaserCard
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=266&fit=crop"
        href="#"
      >
        <h4 className="mb-4 font-semibold text-2xl transition-colors duration-500 group-hover:text-ring">
          Dicas de Candidatura
        </h4>
        <p className="text-gray-600 transition-colors duration-500 group-hover:text-gray-800">
          Aprenda como se destacar no processo seletivo.
        </p>
      </TeaserCard>

      <TeaserCard
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=266&fit=crop"
        href="#"
      >
        <h4 className="mb-4 font-semibold text-2xl transition-colors duration-500 group-hover:text-ring">
          Oportunidades de Carreira
        </h4>
        <p className="text-gray-600 transition-colors duration-500 group-hover:text-gray-800">
          Explore as melhores oportunidades disponíveis.
        </p>
      </TeaserCard>

      <TeaserCard
        src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=266&fit=crop"
        onClick={() => console.log('Newsletter')}
        onMouseEnter={() => {}}
      >
        <h4 className="mb-4 font-semibold text-2xl transition-colors duration-500 group-hover:text-ring">
          Newsletter
        </h4>
        <p className="text-gray-600 transition-colors duration-500 group-hover:text-gray-800">
          Mantenha-se atualizado com nossas novidades.
        </p>
      </TeaserCard>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Demonstra múltiplos TeaserCards com diferentes tipos de conteúdo e interações.',
      },
    },
  },
};

// Story demonstrando estados de hover
export const HoverStates: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="mb-4 text-gray-600 text-sm">
        Passe o mouse sobre os cards para ver os efeitos de hover
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <TeaserCard
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=266&fit=crop"
          href="#"
        >
          <h4 className="mb-4 font-semibold text-2xl transition-colors duration-500 group-hover:text-ring">
            Efeito de Hover
          </h4>
          <p className="text-gray-600 transition-colors duration-500 group-hover:text-gray-800">
            Observe como a imagem escala e as cores mudam no hover.
          </p>
        </TeaserCard>

        <TeaserCard
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=266&fit=crop"
          onClick={() => console.log('Hover effect')}
          onMouseEnter={() => {}}
        >
          <h4 className="mb-4 font-semibold text-2xl transition-colors duration-500 group-hover:text-ring">
            Interação Suave
          </h4>
          <p className="text-gray-600 transition-colors duration-500 group-hover:text-gray-800">
            Transições suaves e animações elegantes.
          </p>
        </TeaserCard>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Demonstra os diferentes estados de hover e as animações do TeaserCard.',
      },
    },
  },
};
