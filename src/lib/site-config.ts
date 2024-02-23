import { env } from '@/env.mjs';

export const siteConfig = {
  title: 'Michał Skolak | Front-end developer',
  description:
    "Hello, I'm Michał. I am front-end developer from Poland. I enjoy building sites and apps. My focus is React (Next.js).",
  keywords: [
    'Michał Skolak',
    'Front-end developer',
    'Poland',
    'React',
    'Next.js',
    'Web development',
    'Front-end',
    'UI/UX',
    'Responsive design',
    'JavaScript',
    'HTML',
    'CSS',
    'Portfolio',
    'Projects',
    'Website',
    'Web applications',
    'Developer',
    'Code',
    'Programming',
    'Tech enthusiast',
  ],
  url: env.SITE_URL || 'https://example.com',
  googleSiteVerificationId: env.GOOGLE_SITE_VERIFICATION_ID || '',
};
