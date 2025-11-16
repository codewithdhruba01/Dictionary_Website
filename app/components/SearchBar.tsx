'use client';

import { Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface SearchBarProps {
  onSearch: (word: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim()) {
        onSearch(query);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [query, onSearch]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-3xl mx-auto px-4 sm:px-0"
    >
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for any word..."
          className="w-full px-4 sm:px-6 py-3 sm:py-4 pr-12 sm:pr-14 rounded-xl sm:rounded-2xl text-sm sm:text-base bg-secondary text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#A445ED] transition-all"
        />
        <button
          type="submit"
          className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 text-[#A445ED] hover:opacity-80 transition-opacity"
        >
          <Search className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </motion.form>
  );
}
