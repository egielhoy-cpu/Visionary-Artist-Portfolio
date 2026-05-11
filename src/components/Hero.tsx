import { motion } from 'motion/react';
import { ArrowDownRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-6 space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-3 py-1 bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest text-zinc-400"
          >
            Available for Freelance
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-light leading-[1.05] tracking-tight"
          >
            Graphic<br/>
            <span className="font-medium italic text-white/90">Artist</span> & <br/>
            Director.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-zinc-400 leading-relaxed max-w-[400px] text-lg font-light"
          >
            Crafting high-impact visual identities and digital experiences for modern brands that refuse to be ignored.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex gap-4"
          >
            <a
              href="#projects"
              className="px-10 py-5 bg-white text-black text-xs uppercase font-bold tracking-widest hover:bg-zinc-200 transition-all flex items-center gap-2"
            >
              View Projects
              <ArrowDownRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        <div className="md:col-span-6 hidden md:grid grid-cols-2 grid-rows-2 gap-4 h-[500px]">
          <div className="rounded-sm overflow-hidden border border-white/5 bg-zinc-900/50">
            <img src="https://picsum.photos/seed/design1/400/400" className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700" alt="Work" />
          </div>
          <div className="rounded-sm overflow-hidden border border-white/5 bg-zinc-900/50 relative top-8">
            <img src="https://picsum.photos/seed/design2/400/400" className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700" alt="Work" />
          </div>
          <div className="rounded-sm overflow-hidden border border-white/5 bg-zinc-900/50 relative -top-8">
            <img src="https://picsum.photos/seed/design3/400/400" className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700" alt="Work" />
          </div>
          <div className="rounded-sm overflow-hidden border border-white/5 bg-zinc-900/50">
            <img src="https://picsum.photos/seed/design4/400/400" className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700" alt="Work" />
          </div>
        </div>
      </div>
    </section>
  );
}
