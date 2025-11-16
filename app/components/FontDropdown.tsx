'use client';

import { useTheme } from '../context/ThemeContext';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const fontOptions = [
  { value: 'sans', label: 'Sans Serif' },
  { value: 'serif', label: 'Serif' },
  { value: 'mono', label: 'Mono' },
];

export function FontDropdown() {
  const { font, setFont } = useTheme();

  return (
    <Select
      value={font}
      onValueChange={(value) => setFont(value as 'sans' | 'serif' | 'mono')}
    >
      <SelectTrigger className="w-[110px] sm:w-[140px] border-0 bg-transparent focus:ring-0 focus:ring-offset-0 text-xs sm:text-sm font-bold">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {fontOptions.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
