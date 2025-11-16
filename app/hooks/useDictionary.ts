'use client';

import { useState } from 'react';

export interface Phonetic {
  text?: string;
  audio?: string;
}

export interface Definition {
  definition: string;
  example?: string;
  synonyms?: string[];
  antonyms?: string[];
}

export interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms?: string[];
  antonyms?: string[];
}

export interface DictionaryEntry {
  word: string;
  phonetic?: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
  sourceUrls?: string[];
}

export function useDictionary() {
  const [data, setData] = useState<DictionaryEntry | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchWord = async (word: string) => {
    if (!word.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );

      if (!response.ok) {
        if (response.status === 404) {
          setError('Word not found. Please try another word.');
        } else {
          setError('Something went wrong. Please try again.');
        }
        setData(null);
        return;
      }

      const result = await response.json();
      setData(result[0]);
    } catch (err) {
      setError('Network error. Please check your connection.');
      setData(null);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 600); // smooth loader
    }
  };

  return { data, loading, error, searchWord };
}
