
'use client';
import { motion } from 'framer-motion';
import { Layers, Code, ShieldCheck } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed w-full z-50 bg-black/70 backdrop-blur border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto flex justify-between px-8 py-4">
        <img src="/logo.png" className="h-8" />
        <div className="hidden md:flex gap-8 text-sm text-white/80">
          <a href="/how-it-works" className="flex gap-1 items-center"><Layers size={14}/> How it works</a>
          <a href="/developers" className="flex gap-1 items-center"><Code size={14}/> Developers</a>
          <a href="/compliance" className="flex gap-1 items-center"><ShieldCheck size={14}/> Compliance</a>
        </div>
      </div>
    </motion.nav>
  );
}
