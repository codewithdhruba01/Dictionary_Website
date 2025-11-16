'use client';

import { BookText } from 'lucide-react';
import { FontDropdown } from './FontDropdown';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between py-4 sm:py-6 px-4 sm:px-6 md:px-8">
      <div className="flex items-center gap-2">
        <BookText className="w-8 sm:w-10 h-8 sm:h-10 text-muted-foreground" />
      </div>

      <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
        <FontDropdown />
        <div className="w-px h-6 sm:h-8 bg-border"></div>
        <ThemeToggle />
      </div>
    </nav>
  );
}
