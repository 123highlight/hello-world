import createMiddleware from 'next-intl/middleware';
import {defaultLocale, localePrefix, locales} from './i18n';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix
});

export const config = {
  matcher: ['/((?!_next|api|icons|manifest\.json|sw\.js|favicon\.ico).*)']
};
