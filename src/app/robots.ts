import type { MetadataRoute } from 'next';

import { siteConfig } from '@/lib/site-config';

const robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: '*',
    allow: '/',
  },
  sitemap: new URL('/sitemap.xml', siteConfig.url).toString(),
});

export default robots;
