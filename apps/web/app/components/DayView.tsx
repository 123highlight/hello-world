'use client';

import {useMemo, useState} from 'react';
import {useLocale, useTranslations} from 'next-intl';
import {formatDayInput, formatDayLabel, parseDayInput} from '@/lib/date';

export function DayView() {
  const locale = useLocale();
  const t = useTranslations('DayPage');
  const [value, setValue] = useState(() => formatDayInput(new Date()));

  const selectedDate = useMemo(() => parseDayInput(value), [value]);
  const selectedLabel = useMemo(() => formatDayLabel(selectedDate, locale), [selectedDate, locale]);

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg">
      <label className="flex w-full flex-col gap-2 text-sm text-slate-200 sm:flex-row sm:items-center">
        <span className="font-medium text-slate-100">{t('cta')}</span>
        <input
          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-base text-slate-100 outline-none ring-brand transition focus:ring"
          type="date"
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
