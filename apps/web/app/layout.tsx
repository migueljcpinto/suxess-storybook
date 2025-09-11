import { DesignSystemProvider } from '@repo/design-system';
import { fonts } from '@repo/design-system/lib/fonts';
import type { Metadata } from 'next';
import type React from 'react';

import '@repo/design-system/styles/globals.base.css';

export const metadata: Metadata = {
  title: 'Suxess Design System - Componentes React Modernos',
  description:
    'Uma coleção completa de componentes React modernos, acessíveis e personalizáveis. Acelere o desenvolvimento com componentes testados e documentados.',
  keywords: [
    'React',
    'Design System',
    'Componentes',
    'UI',
    'Tailwind CSS',
    'TypeScript',
  ],
  authors: [{ name: 'Suxess Team' }],
  openGraph: {
    title: 'Suxess Design System',
    description: 'Componentes React modernos e acessíveis',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className={fonts}>
      <body suppressHydrationWarning>
        <DesignSystemProvider>{children}</DesignSystemProvider>
      </body>
    </html>
  );
}
