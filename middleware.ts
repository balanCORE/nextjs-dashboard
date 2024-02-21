import NextAuth from 'next-auth';
import { NextRequest } from 'next/server';
import { authConfig } from './auth.config';
import { i18nRouter } from 'next-i18n-router';

export default NextAuth(authConfig).auth;

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: [
    '/((?!api|_next/static|_next/image|.*\\.png$).*)',
    '/((?!api|static|.*\\..*|_next).*)',
  ],
  i18n: {
    locales: ['en', 'pl'],
    defaultLocale: 'en',
  },
};

export function middleware(request: NextRequest) {
  return i18nRouter(request, i18nConfig);
}
