'use client';

import Image from 'next/image';
import { FontDropdown } from './FontDropdown';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between py-4 sm:py-6 px-4 sm:px-6 md:px-8">
      <div className="flex items-center gap-2">
        <Image
          src="/logo.png"
          alt="Logo"
          width={60}
          height={60}
          className="object-contain select-none"
        />
      </div>

      <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
        <FontDropdown />
        <div className="w-px h-6 sm:h-8 bg-border"></div>
        <ThemeToggle />
      </div>
    </nav>
  );
}
