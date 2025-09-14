import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { TeaserBar } from './teaserbar';

const meta: Meta<typeof TeaserBar> = {
  title: 'Design System/Components/TeaserBar/TeaserBar',
  component: TeaserBar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'TeaserBar é um organismo completo que combina TeaserBarWrapper e múltiplos TeaserCards. Representa uma seção completa de teasers com interações e estado.',
      },
    },
  },
  argTypes: {
    // O componente não recebe props diretas, mas podemos documentar o comportamento
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TeaserBar>;

// Story padrão
export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'TeaserBar padrão com três cards: dois como links e um como botão interativo para newsletter.',
      },
    },
  },
};

// Story demonstrando interações
export const InteractiveDemo: Story = {
  render: () => {
    // Criamos uma versão customizada para demonstrar as interações
    const handleNewsletterClick = () => {
      alert(
        'Newsletter clicado! Em uma aplicação real, isso abriria um modal ou formulário.'
      );
    };

    return (
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="mb-4 font-bold text-2xl">
            Demonstração de Interações
          </h2>
          <p className="text-gray-600">
            Clique nos cards para ver as diferentes interações. O terceiro card
            (newsletter) é um botão.
          </p>
        </div>
        <TeaserBar />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Demonstra as diferentes interações: links externos e botão para newsletter.',
      },
    },
  },
};

// Story com diferentes temas
export const ThemeVariations: Story = {
  render: () => (
    <div className="space-y-12">
      <div>
        <h3 className="mb-4 font-semibold text-lg">Tema Claro</h3>
        <div className="bg-white">
          <TeaserBar />
        </div>
      </div>

      <div>
        <h3 className="mb-4 font-semibold text-lg">Tema Escuro</h3>
        <div className="bg-gray-900">
          <TeaserBar />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstra o TeaserBar em diferentes temas (claro e escuro).',
      },
    },
  },
};

// Story demonstrando responsividade
export const ResponsiveDemo: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="mb-4 font-bold text-2xl">Layout Responsivo</h2>
        <p className="text-gray-600">
          Redimensione a janela para ver como o layout se adapta de 1 coluna
          (mobile) para 3 colunas (desktop).
        </p>
      </div>
      <TeaserBar />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Demonstra como o TeaserBar se adapta a diferentes tamanhos de tela.',
      },
    },
  },
};

// Story com estado de newsletter
export const NewsletterState: Story = {
  render: () => {
    const [isNewsletterOpen, setIsNewsletterOpen] = React.useState(false);

    return (
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="mb-4 font-bold text-2xl">Estado do Newsletter</h2>
          <p className="text-gray-600">
            O terceiro card controla o estado do newsletter. Status atual:{' '}
            {isNewsletterOpen ? 'Aberto' : 'Fechado'}
          </p>
        </div>

        {/* Simulamos o comportamento do TeaserBar com estado customizado */}
        <section className="outer-container grid justify-center py-container md:gap-y-4 dark:bg-background print:hidden">
          <h3 className="mb-4 md:mb-0">Teaserbar TKAG</h3>
          <div className="inner-container grid grid-flow-row grid-cols-1 gap-y-8 md:grid-flow-col md:grid-cols-3 md:gap-x-8">
            {/* Cards simulados */}
            <div className="group cursor-pointer">
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <div className="flex h-48 w-full items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
                  <span className="font-bold text-white text-xl">Imagem 1</span>
                </div>
              </div>
              <h4 className="mb-4 font-semibold text-2xl">
                Dicas de Candidatura
              </h4>
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

            <div
              className="group cursor-pointer"
              onClick={() => setIsNewsletterOpen(!isNewsletterOpen)}
            >
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <div className="flex h-48 w-full items-center justify-center bg-gradient-to-r from-orange-500 to-red-600">
                  <span className="font-bold text-white text-xl">
                    Newsletter
                  </span>
                </div>
              </div>
              <h4 className="mb-4 font-semibold text-2xl">
                {isNewsletterOpen
                  ? 'Newsletter Aberto'
                  : 'Inscreva-se na nossa newsletter'}
              </h4>
              <p className="text-gray-600">
                {isNewsletterOpen
                  ? 'Formulário de inscrição apareceria aqui'
                  : 'Receba as últimas notícias e oportunidades.'}
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Demonstra como o estado do newsletter é gerenciado no TeaserBar.',
      },
    },
  },
};

// Story com diferentes conteúdos
export const ContentVariations: Story = {
  render: () => (
    <div className="space-y-12">
      <div>
        <h3 className="mb-4 font-semibold text-lg">Conteúdo Padrão</h3>
        <TeaserBar />
      </div>

      <div>
        <h3 className="mb-4 font-semibold text-lg">Conteúdo Customizado</h3>
        <section className="outer-container grid justify-center py-container md:gap-y-4 dark:bg-background print:hidden">
          <h3 className="mb-4 md:mb-0">Teaserbar Customizado</h3>
          <div className="inner-container grid grid-flow-row grid-cols-1 gap-y-8 md:grid-flow-col md:grid-cols-3 md:gap-x-8">
            <div className="group cursor-pointer">
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <div className="flex h-48 w-full items-center justify-center bg-gradient-to-r from-purple-500 to-pink-600">
                  <span className="font-bold text-white text-xl">
                    Carreiras
                  </span>
                </div>
              </div>
              <h4 className="mb-4 font-semibold text-2xl">Explore Carreiras</h4>
              <p className="text-gray-600">
                Descubra diferentes caminhos profissionais.
              </p>
            </div>

            <div className="group cursor-pointer">
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <div className="flex h-48 w-full items-center justify-center bg-gradient-to-r from-indigo-500 to-blue-600">
                  <span className="font-bold text-white text-xl">Eventos</span>
                </div>
              </div>
              <h4 className="mb-4 font-semibold text-2xl">
                Eventos e Workshops
              </h4>
              <p className="text-gray-600">
                Participe de nossos eventos exclusivos.
              </p>
            </div>

            <div className="group cursor-pointer">
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <div className="flex h-48 w-full items-center justify-center bg-gradient-to-r from-emerald-500 to-green-600">
                  <span className="font-bold text-white text-xl">Contato</span>
                </div>
              </div>
              <h4 className="mb-4 font-semibold text-2xl">Fale Conosco</h4>
              <p className="text-gray-600">
                Entre em contato com nossa equipe.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstra diferentes variações de conteúdo no TeaserBar.',
      },
    },
  },
};
