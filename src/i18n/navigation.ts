import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

// Locale-aware wrappers around Next.js navigation APIs.
// Import Link, useRouter, usePathname, redirect from here — not from 'next/navigation'.
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
