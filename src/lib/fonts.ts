import { Inter } from 'next/font/google';

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const fonts = [fontSans.variable];
