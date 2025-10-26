'use client';

import {useLocale, useTranslations} from 'next-intl';
import {usePathname} from '@/navigation';
import {Link} from '@/navigation';
import {locales, localeDisplayNames} from '@/i18n';

export function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations('LocaleSwitcher');

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-slate-400">{t('label')}</span>
      <div className="flex rounded-md bg-slate-800 p-1">
        {locales.map((item) => {
          const isActive = item === locale;

          return (
            <Link
              key={item}
              href={pathname ?? '/'}
              locale={item}
              className={`rounded px-3 py-1 text-sm font-medium transition-colors ${
                isActive ? 'bg-brand text-white' : 'text-slate-300 hover:bg-slate-700'
              }`}
            >
              {localeDisplayNames[item]}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
