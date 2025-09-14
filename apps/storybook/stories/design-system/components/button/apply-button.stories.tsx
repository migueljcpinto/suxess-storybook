import type { Meta, StoryObj } from '@storybook/react';
import type { Job, JobData } from '../../types/job-common';
import { ApplyButton } from './apply-button';

// Mock data para os exemplos
const mockJobData: JobData = {
  idFS: '12345',
  idClient: 'client123',
  jobNumber: 'JOB001',
  title: 'Software Developer',
  language: 'pt',
  businessUnit: 'Technology',
  company: 'Tech Corp',
  employmentType: 'Full-time',
  contract: 'Permanent',
  entryLevel: 'Mid-level',
  entryLevel_order: 2,
  jobField: 'Software Development',
  category: 'IT',
  applicationEnd: null,
  locations: [
    {
      city: 'Lisboa',
      state: 'Lisboa',
      country: 'Portugal',
      stateShort: 'LIS',
      cityState: 'Lisboa, Lisboa',
      coordinates: { lat: 38.7223, lng: -9.1393 },
    },
  ],
  country: 'Portugal',
  state: 'Lisboa',
  stateShort: 'LIS',
  city: 'Lisboa',
  cityState: 'Lisboa, Lisboa',
  recruiter: 'recruiter@techcorp.com',
  remote: 'Hybrid',
  google_employmentType: 'FULL_TIME',
  expectedStartDate: '2024-02-01',
  applicationUrl: 'https://techcorp.com/apply/12345',
  postingDate: '2024-01-15',
  postingDate_timestamp: 1705276800000,
  online: true,
  jobBoard_link: 'https://jobs.techcorp.com/12345',
  applicationUrlDirect: 'https://techcorp.com/apply/12345/direct',
  template: 'default',
  classification: 'Professional',
  lastUpdated: '2024-01-15T10:00:00Z',
};

const mockJob: Job = {
  data: mockJobData,
  content: {
    businessHL: 'Nossa Empresa',
    business: 'Somos uma empresa líder em tecnologia...',
    company: 'Tech Corp',
    taskHL: 'Responsabilidades',
    task: 'Desenvolver aplicações web modernas...',
    profileHL: 'Perfil Ideal',
    profile: 'Experiência em React, TypeScript...',
    offerHL: 'O que Oferecemos',
    offer: 'Salário competitivo, benefícios...',
    contactHL: 'Contato',
    contact: 'Para mais informações...',
    diversityHL: 'Diversidade',
    diversity: 'Valorizamos a diversidade...',
    entryLevel: 'Mid-level',
    contract: 'Permanent',
    employmentType: 'Full-time',
    jobField: 'Software Development',
    category: 'IT',
    video: undefined,
    fastApply: true,
    headerImage: 'https://example.com/header.jpg',
    applicationEnd: null,
    similarJobs: [],
    mobileHeaderImage: 'https://example.com/mobile-header.jpg',
    careerSiteTags: ['react', 'typescript', 'frontend'],
  },
  _geoloc: [{ lat: 38.7223, lng: -9.1393 }],
  meta: {
    openai: {
      batchId: 'batch123',
      processed: true,
    },
    description:
      'Desenvolvedor de software com experiência em React e TypeScript',
  },
};

const meta: Meta<typeof ApplyButton> = {
  title: 'Design System/Components/Button/ApplyButton',
  component: ApplyButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Botão de candidatura que gera automaticamente um link para a página de aplicação da vaga. Pode ser usado com dados de Job ou JobData. Inclui funcionalidade de toast para indicar que a candidatura foi iniciada.',
      },
    },
  },
  argTypes: {
    job: {
      description: 'Objeto Job ou JobData contendo informações da vaga',
      control: false,
    },
    customUrl: {
      description:
        'URL customizada para a aplicação (sobrescreve a URL da vaga)',
      control: 'text',
    },
    blank: {
      description: 'Se deve abrir o link em uma nova aba',
      control: 'boolean',
      defaultValue: true,
    },
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
    children: {
      description:
        'Conteúdo personalizado do botão (se não fornecido, usa "Apply Now")',
      control: 'text',
    },
    showToast: {
      description: 'Se deve mostrar um toast ao clicar no botão',
      control: 'boolean',
      defaultValue: true,
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ApplyButton>;

// Story básica com Job completo
export const Default: Story = {
  args: {
    job: mockJob,
    variant: 'default',
    size: 'default',
    blank: true,
  },
};

// Story com JobData (sem content)
export const WithJobData: Story = {
  args: {
    job: mockJobData,
    variant: 'default',
    size: 'default',
    blank: true,
  },
};

// Story com URL customizada
export const CustomUrl: Story = {
  args: {
    job: mockJob,
    customUrl: 'https://custom-apply.com/12345',
    variant: 'default',
    size: 'default',
    blank: true,
  },
};

// Story com texto customizado
export const CustomText: Story = {
  args: {
    job: mockJob,
    variant: 'default',
    size: 'default',
    blank: true,
    children: 'Candidatar-se Agora',
  },
};

// Story com ícone e texto
export const WithIcon: Story = {
  args: {
    job: mockJob,
    variant: 'default',
    size: 'default',
    blank: true,
    children: (
      <>
        <svg
          className="mr-2 h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
        Aplicar
      </>
    ),
  },
};

// Diferentes variantes
export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <ApplyButton {...args} variant="default" />
        <ApplyButton {...args} variant="secondary" />
        <ApplyButton {...args} variant="outline" />
      </div>
      <div className="flex items-center gap-4">
        <ApplyButton {...args} variant="destructive" />
        <ApplyButton {...args} variant="ghost" />
        <ApplyButton {...args} variant="link" />
      </div>
    </div>
  ),
  args: {
    job: mockJob,
    size: 'default',
    blank: true,
  },
};

// Diferentes tamanhos
export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-4">
      <ApplyButton {...args} size="sm" />
      <ApplyButton {...args} size="default" />
      <ApplyButton {...args} size="lg" />
    </div>
  ),
  args: {
    job: mockJob,
    variant: 'default',
    blank: true,
  },
};

// Story com mesma aba (blank=false)
export const SameTab: Story = {
  args: {
    job: mockJob,
    variant: 'default',
    size: 'default',
    blank: false,
    children: 'Aplicar (mesma aba)',
  },
};

// Story demonstrando o toast
export const WithToast: Story = {
  args: {
    job: mockJob,
    variant: 'default',
    size: 'default',
    blank: true,
    showToast: true,
    children: 'Aplicar com Toast',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Esta story demonstra o toast que aparece ao clicar no botão. O toast mostra uma mensagem de sucesso com o título da vaga.',
      },
    },
  },
};

// Story sem toast
export const WithoutToast: Story = {
  args: {
    job: mockJob,
    variant: 'default',
    size: 'default',
    blank: true,
    showToast: false,
    children: 'Aplicar sem Toast',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Esta story demonstra o botão sem o toast. Útil quando você não quer mostrar notificações.',
      },
    },
  },
};

// Story com job sem applicationUrl (usando customUrl)
export const WithoutApplicationUrl: Story = {
  args: {
    job: {
      ...mockJob,
      data: {
        ...mockJob.data,
        applicationUrl: '',
      },
    },
    customUrl: 'https://fallback-apply.com/12345',
    variant: 'default',
    size: 'default',
    blank: true,
    children: 'Aplicar via Link Alternativo',
  },
};

// Story demonstrando diferentes estados
export const States: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <div className="mb-2 text-gray-600 text-sm">Estados do Botão:</div>
      <div className="flex items-center gap-4">
        <ApplyButton {...args} />
        <ApplyButton {...args} variant="secondary" />
        <ApplyButton {...args} variant="outline" />
      </div>
      <div className="mt-4 mb-2 text-gray-600 text-sm">
        Com texto customizado:
      </div>
      <div className="flex items-center gap-4">
        <ApplyButton {...args}>Candidatar-se</ApplyButton>
        <ApplyButton {...args} variant="secondary">
          Aplicar Agora
        </ApplyButton>
        <ApplyButton {...args} variant="outline">
          Inscrever-se
        </ApplyButton>
      </div>
    </div>
  ),
  args: {
    job: mockJob,
    size: 'default',
    blank: true,
  },
};
