import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

// Note: In Next.js 16, this file is named `proxy.ts` instead of `middleware.ts`.
// It intercepts all routes and handles locale detection + redirection.
// Visiting "/" will automatically redirect to "/ar" (the default locale).
export default createMiddleware(routing);

export const config = {
  // Match all pathnames except:
  // - paths beginning with /api, /trpc, /_next, or /_vercel
  // - paths containing a dot (e.g. favicon.ico, images)
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};
