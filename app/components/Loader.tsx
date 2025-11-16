'use client';

import { motion } from 'framer-motion';

export function Loader() {
  return (
    <div className="flex items-center justify-center py-20">
      <motion.div
        className="w-12 h-12 border-4 border-[#A445ED] border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
}
