'use client';

import { BookOpen } from 'lucide-react';
import { FontDropdown } from './FontDropdown';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between py-4 sm:py-6 px-4 sm:px-6 md:px-8">
      <div className="flex items-center gap-2">
        <BookOpen className="w-6 sm:w-8 h-6 sm:h-8 text-muted-foreground" />
      </div>

      <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
        <FontDropdown />
        <div className="w-px h-6 sm:h-8 bg-border"></div>
        <ThemeToggle />
      </div>
    </nav>
  );
}
