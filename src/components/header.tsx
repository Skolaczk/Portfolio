'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { useActiveSection } from '@/components/active-section-provider';
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
  const [isOpen, setIsOpen] = useState(false);
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSection();

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sm:bg-background/80 sticky top-5 z-20 my-5 flex items-center gap-2 sm:top-10 sm:my-10 sm:rounded-full sm:border sm:px-2 sm:py-3 sm:backdrop-blur-sm"
    >
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            size="lg"
            className="bg-background/80 backdrop-blur-sm sm:hidden"
          >
            Menu <Icons.chevronDown className="ml-2 size-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="text-muted-foreground max-h-screen w-[90%] rounded">
          <DialogHeader>
            <DialogTitle className="text-md self-start font-medium">
              Navigation
            </DialogTitle>
          </DialogHeader>
          <nav>
            <ul>
              {links.map(({ name, hash }) => (
                <li
                  onClick={() => setIsOpen(false)}
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
      <ThemeToggle className="bg-background/80 backdrop-blur-sm sm:hidden" />
      <nav className="text-muted-foreground hidden text-sm sm:block">
        <ul className="flex gap-5">
          {links.map(({ name, hash }) => (
            <li key={name}>
              <Link
                href={hash}
                className="hover:text-foreground relative px-4 py-2 transition-colors"
                onClick={() => {
                  setActiveSection(name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {name}
                {name === activeSection && (
                  <motion.span
                    className="bg-muted absolute inset-0 -z-10 rounded-full"
                    layoutId="activeSection"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};
