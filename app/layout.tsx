import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@/styles/globals.css';
import React, { ReactNode } from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { theme } from '@/theme';

export const metadata = {
  title: 'Supabase Auth',
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <Notifications position="top-right" zIndex={1000} withinPortal />
          <main>{children}</main>
        </MantineProvider>
      </body>
    </html>
  );
}
