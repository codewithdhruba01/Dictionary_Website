'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Switch } from '@/components/ui/switch';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center gap-3">
      <Switch
        checked={theme === 'dark'}
        onCheckedChange={toggleTheme}
        className="data-[state=checked]:bg-[#A445ED]"
      />
      {theme === 'dark' ? (
        <Moon className="w-5 h-5 text-muted-foreground" />
      ) : (
        <Sun className="w-5 h-5 text-muted-foreground" />
      )}
    </div>
  );
}
