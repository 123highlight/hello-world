import {Locale} from '@/i18n';

const pad = (value: number) => value.toString().padStart(2, '0');

export function formatMonthInput(date: Date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}`;
}

export function formatDayInput(date: Date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

export function parseMonthInput(value: string) {
  const [year, month] = value.split('-').map(Number);
  if (!year || !month) {
    return new Date();
  }
  return new Date(year, month - 1, 1);
}

export function parseDayInput(value: string) {
  const [year, month, day] = value.split('-').map(Number);
  if (!year || !month || !day) {
    return new Date();
  }
  return new Date(year, month - 1, day);
}

export function formatMonthLabel(date: Date, locale: Locale | string) {
  return new Intl.DateTimeFormat(locale, {
    month: 'long',
    year: 'numeric'
  }).format(date);
}

export function formatDayLabel(date: Date, locale: Locale | string) {
  return new Intl.DateTimeFormat(locale, {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }).format(date);
}
