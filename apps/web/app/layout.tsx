import type {Metadata, Viewport} from 'next';
import type {ReactNode} from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Calendar',
    template: '%s · Calendar'
  },
  description: 'Localized calendar application scaffold with basic month/day previews.',
  manifest: '/manifest.json',
  icons: {
    icon: '/icons/icon-192x192.png',
    apple: '/icons/icon-512x512.png'
  }
};

export const viewport: Viewport = {
  themeColor: '#2563eb',
  width: 'device-width',
  initialScale: 1
};

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
