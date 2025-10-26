import {getTranslations} from 'next-intl/server';
import {MonthView} from '@/components/MonthView';
import type {Locale} from '@/i18n';

interface MonthPageProps {
  params: {
    locale: Locale;
  };
}

export default async function MonthPage({params}: MonthPageProps) {
  const t = await getTranslations({locale: params.locale, namespace: 'MonthPage'});

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-white">{t('title')}</h1>
        <p className="text-base text-slate-300">{t('lead')}</p>
      </div>
      <MonthView />
    </section>
  );
}
