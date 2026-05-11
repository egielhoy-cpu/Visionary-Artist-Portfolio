import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

interface ProjectProps {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

export default function ProjectCard({ project }: { project: ProjectProps }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group relative h-full"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900 border border-white/5 rounded-sm h-full">
        <motion.img
          src={project.image}
          alt={project.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
          <span className="text-[9px] uppercase tracking-widest text-zinc-400 mb-1">
            {project.category}
          </span>
          <h3 className="text-2xl font-medium tracking-tight group-hover:text-white transition-colors">
            {project.title}
          </h3>
          <p className="text-zinc-500 text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
            {project.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
