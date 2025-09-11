import { Toaster } from '@repo/design-system/components/ui/sonner';
import { TooltipProvider } from '@repo/design-system/components/ui/tooltip';
import { ThemeProvider } from '@repo/design-system/providers/theme';
import { withThemeByClassName } from '@storybook/addon-themes';
import type { Preview } from '@storybook/nextjs';
// biome-ignore lint/correctness/noUnusedImports: React is needed for JSX in Storybook
import React from 'react';

// Importar todos os estilos de tenants estaticamente
import '@repo/design-system/styles/globals.base.css';
import '@repo/design-system/styles/globals.tkag.css';
import '@repo/design-system/styles/globals.tkms.css';

const preview: Preview = {
  globalTypes: {
    tenant: {
      description: 'Selecione o tenant/cliente para visualizar os componentes',
      toolbar: {
        title: 'Tenant',
        icon: 'user',
        items: [
          { value: 'base', title: 'Base', right: '🎨' },
          { value: 'tkag', title: 'TKAG', right: '🏢' },
          { value: 'tkms', title: 'TKMS', right: '🚀' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    tenant: 'base',
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    chromatic: {
      modes: {
        light: {
          theme: 'light',
          className: 'light',
        },
        dark: {
          theme: 'dark',
          className: 'dark',
        },
      },
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
    (Story, context) => {
      const selectedTenant = context.globals.tenant || 'base';

      return (
        <div className={`bg-background tenant-${selectedTenant}`}>
          <ThemeProvider>
            <TooltipProvider>
              <Story />
            </TooltipProvider>
            <Toaster />
          </ThemeProvider>
        </div>
      );
    },
  ],
};

export default preview;
