import { motion } from 'motion/react';

export default function About() {
  const skills = [
    "Adobe Creative Cloud", "Figma", "Webflow", "Motion Design", 
    "Brand Strategy", "Typography", "3D Visualization", "UI/UX Architecture"
  ];

  return (
    <section id="about" className="py-32 border-y border-white/5 bg-zinc-900/10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[10px] uppercase tracking-[0.3em] font-medium text-zinc-500 mb-6">Philosophy</h2>
          <h3 className="text-4xl md:text-6xl font-light tracking-tight leading-tight mb-8">
            LESS BUT <br /><span className="italic font-medium">BETTER</span>.
          </h3>
          <p className="text-zinc-400 text-lg font-light leading-relaxed mb-8">
            Based in the digital ether, I am a multi-disciplinary graphic artist 
            with a decade of experience helping brands stand out in a noisy world. 
            My philosophy is simple: cut through the clutter with precision, 
            elegance, and purpose.
          </p>
          <p className="text-zinc-400 text-lg font-light leading-relaxed mb-12">
            Design is the silence between the noise. I focus on minimal aesthetics that deliver maximum emotional impact.
          </p>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <span 
                key={skill}
                className="px-4 py-2 border border-white/10 text-[10px] uppercase tracking-widest font-bold"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative aspect-square"
        >
          <div className="absolute inset-0 border border-white/20 m-6 -z-10" />
          <img 
            src="https://picsum.photos/seed/artist/800/800" 
            alt="Portrait"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700" 
          />
        </motion.div>
      </div>
    </section>
  );
}
