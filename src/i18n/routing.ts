import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // All supported locales
  locales: ['ar', 'en', 'fr'],

  // Arabic is the default locale
  defaultLocale: 'ar',
});
