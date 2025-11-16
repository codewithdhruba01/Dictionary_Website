'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { DictionaryEntry } from '../hooks/useDictionary';
import { useState } from 'react';

interface MeaningCardProps {
  data: DictionaryEntry;
}

export function MeaningCard({ data }: MeaningCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const audioUrl = data.phonetics.find((p) => p.audio)?.audio;

  const playAudio = () => {
    if (audioUrl) {
      const audio = new Audio(audioUrl);
      setIsPlaying(true);
      audio.play();
      audio.onended = () => setIsPlaying(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-3xl mx-auto mt-8 sm:mt-10 md:mt-12 space-y-6 sm:space-y-8"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">{data.word}</h1>
          {data.phonetic && (
            <p className="text-base sm:text-lg md:text-xl text-[#A445ED]">{data.phonetic}</p>
          )}
        </div>
        {audioUrl && (
          <button
            onClick={playAudio}
            disabled={isPlaying}
            className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-[#A445ED] hover:bg-[#8c3ac7] flex items-center justify-center transition-all disabled:opacity-50 flex-shrink-0"
          >
            <Play className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white ml-1" fill="white" />
          </button>
        )}
      </div>

      {data.meanings.map((meaning, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3 sm:gap-4">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold italic">
              {meaning.partOfSpeech}
            </h2>
            <div className="flex-1 h-px bg-border"></div>
          </div>

          <div className="space-y-4">
            <h3 className="text-base sm:text-lg text-muted-foreground">Meaning</h3>
            <ul className="space-y-2 sm:space-y-3 pl-4 sm:pl-6">
              {meaning.definitions.map((def, defIndex) => (
                <li key={defIndex} className="relative">
                  <span className="absolute -left-4 sm:-left-6 text-[#A445ED]">•</span>
                  <p className="text-sm sm:text-base text-foreground">{def.definition}</p>
                  {def.example && (
                    <p className="mt-2 text-sm sm:text-base text-muted-foreground italic">
                      "{def.example}"
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {meaning.synonyms && meaning.synonyms.length > 0 && (
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-base sm:text-lg text-muted-foreground">Synonyms</span>
              {meaning.synonyms.slice(0, 5).map((synonym, synIndex) => (
                <span
                  key={synIndex}
                  className="text-sm sm:text-base text-[#A445ED] font-bold hover:underline cursor-pointer"
                >
                  {synonym}
                </span>
              ))}
            </div>
          )}
        </motion.div>
      ))}

      {data.sourceUrls && data.sourceUrls.length > 0 && (
        <div className="pt-4 sm:pt-6 border-t border-border">
          <div className="flex flex-wrap gap-2 items-center text-xs sm:text-sm">
            <span className="text-muted-foreground underline">Source</span>
            <a
              href={data.sourceUrls[0]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-[#A445ED] transition-colors break-all"
            >
              {data.sourceUrls[0]}
            </a>
          </div>
        </div>
      )}
    </motion.div>
  );
}
