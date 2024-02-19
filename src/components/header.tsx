'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { Button } from '@/components/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/dialog';
import { Icons } from '@/components/icons';
import { ThemeToggle } from '@/components/theme-toggle';
import { links } from '@/lib/data';

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sm:bg-secondary/80 sticky top-5 z-20 my-5 flex items-center gap-2 sm:top-10 sm:my-10 sm:rounded-full sm:px-8 sm:py-3 sm:backdrop-blur-sm"
    >
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="secondary" size="lg" className="sm:hidden">
            Menu <Icons.chevronDown className="ml-2 size-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="text-muted-foreground max-h-screen w-[90%]">
          <DialogHeader>
            <DialogTitle className="text-md self-start font-medium">
              Navigation
            </DialogTitle>
          </DialogHeader>
          <nav>
            <ul>
              {links.map(({ name, hash }) => (
                <li
                  onClick={() => setOpen(false)}
                  key={name}
                  className="border-muted-foreground/10 py-3 text-sm [&:not(:last-child)]:border-b"
                >
                  <Link className="block" href={hash}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </DialogContent>
      </Dialog>
      <ThemeToggle className="sm:hidden" />
      <nav className="text-muted-foreground hidden text-sm sm:block">
        <ul className="flex gap-10">
          {links.map(({ name, hash }) => (
            <li key={name}>
              <Link
                href={hash}
                className="hover:text-foreground transition-colors"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};
