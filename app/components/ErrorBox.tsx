'use client';

import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

interface ErrorBoxProps {
  message: string;
}

export function ErrorBox({ message }: ErrorBoxProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-3xl mx-auto mt-12 p-8 rounded-2xl bg-secondary text-center"
    >
      <AlertCircle className="w-16 h-16 mx-auto mb-4 text-destructive" />
      <h2 className="text-2xl font-bold mb-2">Oops!</h2>
      <p className="text-muted-foreground">{message}</p>
    </motion.div>
  );
}
