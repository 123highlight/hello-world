'use client';

import {useMemo} from 'react';
import {useTranslations} from 'next-intl';
import {Link, usePathname} from '@/navigation';

const LINKS = [
  {href: '/month', key: 'month'},
  {href: '/day', key: 'day'}
] as const;

export function NavigationLinks() {
  const pathname = usePathname();
  const t = useTranslations('Navigation');

  const activePath = useMemo(() => pathname ?? '/month', [pathname]);

  return (
    <nav className="flex items-center gap-2 text-sm">
      {LINKS.map((link) => {
        const isActive = activePath.startsWith(link.href);

        return (
          <Link
            key={link.key}
            href={link.href}
            className={`rounded-lg px-3 py-1.5 font-medium transition-colors ${
              isActive ? 'bg-brand text-white shadow' : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            {t(link.key)}
          </Link>
        );
      })}
    </nav>
  );
}
