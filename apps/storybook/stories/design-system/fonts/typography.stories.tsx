import { Badge } from '@repo/design-system/components/ui/badge';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'design-system/Fonts/Typography',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Multi-tenant demonstration - shows how the typography adapts to different tenants. The fonts change automatically based on the selected tenant.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Headings: Story = {
  render: (_, { globals: { tenant } }) => (
    <div className="space-y-6">
      <div className="mb-4 text-muted-foreground text-sm">
        Tenant: <Badge variant="secondary">{tenant || 'base'}</Badge>
      </div>
      <div className="space-y-4">
        <h1>Heading 1 - Main Title</h1>
        <h2>Heading 2 - Subtitle</h2>
        <h3>Heading 3 - Section</h3>
        <h4>Heading 4 - Subsection</h4>
      </div>
    </div>
  ),
};

export const BodyText: Story = {
  render: (_, { globals: { tenant } }) => (
    <div className="max-w-2xl space-y-4">
      <div className="mb-4 text-muted-foreground text-sm">
        Tenant: <Badge variant="secondary">{tenant || 'base'}</Badge>
      </div>
      <div className="space-y-4">
        <p>
          This is an example paragraph that demonstrates how the text adapts to
          the selected tenant. The fonts, colors and styles change automatically
          when you switch between tenants.
        </p>
        <p className="text-muted-foreground">
          This is a secondary paragraph that also adapts to the tenant. tenant.
        </p>
        <blockquote className="border-primary border-l-4 pl-4 italic">
          "This is an example quote that demonstrates how the text elements
          behave in different tenants." behave in different tenants." tenants."
        </blockquote>
      </div>
    </div>
  ),
};

export const FontComparison: Story = {
  render: (_, { globals: { tenant } }) => (
    <div className="space-y-6">
      <div className="mb-4 text-muted-foreground text-sm">
        Tenant: <Badge variant="secondary">{tenant || 'base'}</Badge>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="space-y-3">
          <h3 className="font-semibold text-lg">Base</h3>
          <p className="text-muted-foreground text-sm">
            Default system fonts (Inter/System)
          </p>
          <div className="space-y-2">
            <h4>Heading Example</h4>
            <p>Body text example</p>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold text-lg">TKAG</h3>
          <p className="text-muted-foreground text-sm">
            Fiera (body) + TK Type (headings)
          </p>
          <div className="space-y-2">
            <h4>Heading Example</h4>
            <p>Body text example</p>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold text-lg">TKMS</h3>
          <p className="text-muted-foreground text-sm">
            TKMS Type (body) + TKMS Headline (headings)
          </p>
          <div className="space-y-2">
            <h4>HEADING EXAMPLE</h4>
            <p>Body text example</p>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const ResponsiveTypography: Story = {
  render: (_, { globals: { tenant } }) => (
    <div className="space-y-6">
      <div className="mb-4 text-muted-foreground text-sm">
        Tenant: <Badge variant="secondary">{tenant || 'base'}</Badge>
      </div>
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl">
          Responsive Heading 1
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl">
          Responsive Heading 2
        </h2>
        <h3 className="text-xl">Responsive Heading 3</h3>
        <p className="text-base md:text-lg">
          This paragraph demonstrates how the typography adapts to different
          screen sizes, keeping the visual identity of the selected tenant.
        </p>
      </div>
    </div>
  ),
};
