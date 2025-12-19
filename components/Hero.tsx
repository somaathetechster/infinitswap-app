
'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="pt-48 pb-36 px-8 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-6xl md:text-7xl font-semibold mb-8"
      >
        Financial infrastructure<br />
        <span className="gradient-text">for a borderless Africa</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-white/70 max-w-2xl mx-auto"
      >
        Compliant payments, virtual assets and automation — built on licensed rails.
      </motion.p>
    </section>
  );
}
