export const locales = ['en', 'zh-CN'] as const;
export const defaultLocale = 'en';
export const localePrefix = 'always';

export type Locale = (typeof locales)[number];

export const localeDisplayNames: Record<Locale, string> = {
  en: 'English',
  'zh-CN': '简体中文'
};
