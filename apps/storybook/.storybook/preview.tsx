import { Toaster } from '@repo/design-system/components/ui/sonner';
import { TooltipProvider } from '@repo/design-system/components/ui/tooltip';
import { ThemeProvider } from '@repo/design-system/providers/theme';
import { withThemeByClassName } from '@storybook/addon-themes';
import type { Preview } from '@storybook/nextjs';
// biome-ignore lint/correctness/noUnusedImports: React is needed for JSX in Storybook
import React from 'react';

import '@repo/design-system/styles/globals.base.css';
import '@repo/design-system/styles/globals.tkag.css';
import '@repo/design-system/styles/globals.tkms.css';

const TENANTS = [
  { value: 'base', title: 'Base', right: '🎨' },
  { value: 'tkag', title: 'TKAG', right: '🏢' },
  { value: 'tkms', title: 'TKMS', right: '🚀' },
] as const;

const THEMES = [
  { value: 'light', title: 'Light', icon: 'sun' },
  { value: 'dark', title: 'Dark', icon: 'moon' },
] as const;

const chromaticModes = Object.fromEntries(
  TENANTS.flatMap((tenant) =>
    THEMES.map((theme) => [
      `${tenant.value}-${theme.value}`,
      {
        theme: theme.value,
        tenant: tenant.value,
        name: `${tenant.title} (${theme.title})`,
      },
    ])
  )
);

const preview: Preview = {
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Select light/dark mode',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: THEMES,
        dynamicTitle: true,
      },
    },
    tenant: {
      name: 'Tenant',
      description: 'Select the tenant/client',
      toolbar: {
        title: 'Tenant',
        icon: 'user',
        items: TENANTS,
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'light',
    tenant: 'base',
  },
  parameters: {
    controls: {
      matchers: { color: /(background|color)$/i, date: /Date$/i },
    },
    chromatic: {
      modes: chromaticModes,
    },
  },
  decorators: [
    withThemeByClassName({
      themes: { light: 'light', dark: 'dark' },
      defaultTheme: 'light',
      parentSelector: 'html',
    }),

    (Story, { globals }) => {
      const selectedTenant =
        (globals.tenant as (typeof TENANTS)[number]['value']) ?? 'base';

      const html = document.documentElement;
      for (const t of TENANTS) {
        html.classList.remove(`tenant-${t.value}`);
      }
      html.classList.add(`tenant-${selectedTenant}`);
      html.setAttribute('data-tenant', selectedTenant);

      return (
        <div className={`tenant-${selectedTenant}`}>
          <ThemeProvider forcedTheme={globals.theme as 'light' | 'dark'}>
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
