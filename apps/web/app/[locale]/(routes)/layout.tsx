import type {ReactNode} from 'react';
import {getTranslations} from 'next-intl/server';
import {Locale} from '@/i18n';
import {NavigationLinks} from '@/components/NavigationLinks';
import {LocaleSwitcher} from '@/components/LocaleSwitcher';

interface RoutesLayoutProps {
  children: ReactNode;
  params: {
    locale: Locale;
  };
}

export default async function RoutesLayout({children, params}: RoutesLayoutProps) {
  const t = await getTranslations({locale: params.locale, namespace: 'Navigation'});

  return (
    <div className="flex min-h-screen flex-col bg-slate-950">
      <header className="border-b border-slate-800 bg-slate-900/70">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <span className="text-lg font-semibold text-white">{t('title')}</span>
            <NavigationLinks />
          </div>
          <LocaleSwitcher />
        </div>
      </header>
      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-8 px-6 py-10">
        {children}
      </main>
      <footer className="border-t border-slate-800 bg-slate-900/60">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4 text-xs text-slate-500">
          <span>{t('title')}</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
}
