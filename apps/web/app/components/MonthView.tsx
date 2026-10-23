'use client';

import {useMemo, useState} from 'react';
import {useLocale, useTranslations} from 'next-intl';
import {formatMonthInput, formatMonthLabel, parseMonthInput} from '@/lib/date';

export function MonthView() {
  const locale = useLocale();
  const t = useTranslations('MonthPage');
  const [value, setValue] = useState(() => formatMonthInput(new Date()));

  const selectedDate = useMemo(() => parseMonthInput(value), [value]);
  const selectedLabel = useMemo(() => formatMonthLabel(selectedDate, locale), [selectedDate, locale]);

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg">
      <label className="flex w-full flex-col gap-2 text-sm text-slate-200 sm:flex-row sm:items-center">
        <span className="font-medium text-slate-100">{t('cta')}</span>
        <input
          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-base text-slate-100 outline-none ring-brand transition focus:ring"
          type="month"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </label>

      <p className="mt-4 text-sm text-slate-300">{t('selected', {value: selectedLabel})}</p>

      <div className="mt-6 space-y-3 text-sm text-slate-300">
        <p className="font-semibold uppercase tracking-wide text-slate-400">{t('placeholderHeading')}</p>
        <ul className="space-y-2 pl-4">
          <li className="list-disc">{t('exampleOne')}</li>
          <li className="list-disc">{t('exampleTwo')}</li>
          <li className="list-disc">{t('exampleThree')}</li>
        </ul>
      </div>
    </div>
  );
}
