import {redirect} from 'next/navigation';
import type {Locale} from '@/i18n';

interface LocalePageProps {
  params: {
    locale: Locale;
  };
}

export default function LocalePage({params}: LocalePageProps) {
  redirect(`/${params.locale}/month`);
}
