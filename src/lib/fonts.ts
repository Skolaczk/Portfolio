import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from 'next/font/google';

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

const fontHeading = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
});

export const fonts = [
  fontSans.variable,
  fontMono.variable,
  fontHeading.variable,
];
