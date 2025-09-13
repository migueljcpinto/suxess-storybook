import { Toaster } from '@repo/design-system/components/ui/sonner';
import { TooltipProvider } from '@repo/design-system/components/ui/tooltip';
import { ThemeProvider } from '@repo/design-system/providers/theme';
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
    (Story, { globals }) => {
      const selectedTenant =
        (globals.tenant as (typeof TENANTS)[number]['value']) ?? 'base';
      const selectedTheme = (globals.theme as 'light' | 'dark') ?? 'light';

      return (
        <ThemeProvider forcedTheme={selectedTheme}>
          <div className={`tenant-${selectedTenant} ${selectedTheme}`}>
            <TooltipProvider>
              <Story />
            </TooltipProvider>
            <Toaster />
          </div>
        </ThemeProvider>
      );
    },
  ],
};
export default preview;
