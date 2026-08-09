import Link from 'next/link';

import { Button } from '@/components/button';
import { Icons } from '@/components/icons';

export const metadata = {
  title: 'Page not found',
};

const NotFound = () => {
  return (
    <div className="dark flex min-h-screen items-center justify-center bg-background px-8 text-foreground">
      <div className="flex max-w-xl flex-col items-center gap-5 text-center">
        <p className="bg-linear-to-r from-rose-700 to-pink-600 bg-clip-text font-extrabold font-heading text-7xl text-transparent md:text-8xl">
          404
        </p>
        <h1 className="font-extrabold font-heading text-3xl md:text-4xl">
          Page not found
        </h1>
        <p className="text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <Button asChild size="lg">
          <Link href="/">
            Back to home <Icons.arrowRight className="ml-2 size-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
