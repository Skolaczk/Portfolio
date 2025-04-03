import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from 'next/font/google';

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

const fontHeading = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
});

export const fonts = [
  fontSans.variable,
  fontMono.variable,
  fontHeading.variable,
];
