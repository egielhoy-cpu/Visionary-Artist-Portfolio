import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-xl font-bold tracking-tighter">
          ELARA<span className="text-zinc-500">VANCE</span>
        </div>
        
        <div className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">
          © {new Date().getFullYear()} Elara Vance Studio. All rights reserved.
        </div>

        <div className="flex gap-8 text-[10px] uppercase font-bold tracking-widest text-zinc-500">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Behance</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
