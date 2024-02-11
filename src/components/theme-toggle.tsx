'use client';

import { useTheme } from 'next-themes';

import { Icons } from '@/components/icons';

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      aria-label="theme toggle"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <Icons.sun className="dark:hidden" />
      <Icons.moon className="hidden dark:block" />
    </button>
  );
};
