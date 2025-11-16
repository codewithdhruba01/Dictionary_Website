'use client';

import { Navbar } from './components/Navbar';
import { SearchBar } from './components/SearchBar';
import { MeaningCard } from './components/MeaningCard';
import { Loader } from './components/Loader';
import { ErrorBox } from './components/ErrorBox';
import { useDictionary } from './hooks/useDictionary';
import { ThemeProvider } from './context/ThemeContext';

function DictionaryContent() {
  const { data, loading, error, searchWord } = useDictionary();

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors">
      <div className="max-w-5xl mx-auto px-4">
        <Navbar />

        <div className="mt-8 md:mt-12">
          <SearchBar onSearch={searchWord} />
        </div>

        <div className="mt-8">
          {loading && <Loader />}
          {error && !loading && <ErrorBox message={error} />}
          {data && !loading && !error && <MeaningCard data={data} />}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <ThemeProvider>
      <DictionaryContent />
    </ThemeProvider>
  );
}
