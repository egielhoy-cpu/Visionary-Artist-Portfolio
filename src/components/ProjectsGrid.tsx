import ProjectCard from './ProjectCard';

const PROJECTS = [
  {
    id: 1,
    title: "LUMINA IDENTITY",
    category: "Branding",
    description: "Visual identity for a boutique lighting design studio, focused on minimalist warmth.",
    image: "https://picsum.photos/seed/lumina/800/600"
  },
  {
    id: 2,
    title: "NEON SOCIAL",
    category: "Social Media",
    description: "High-octane social media campaign for a global esports tournament.",
    image: "https://picsum.photos/seed/neon/800/600"
  },
  {
    id: 3,
    title: "SWISS MINIMAL",
    category: "Posters",
    description: "A series of editorial posters exploring the intersection of typography and negative space.",
    image: "https://picsum.photos/seed/swiss/800/600"
  },
  {
    id: 4,
    title: "ORBITAL OS",
    category: "UI Design",
    description: "Experimental dashboard design for satellite monitoring systems.",
    image: "https://picsum.photos/seed/orbit/800/600"
  },
  {
    id: 5,
    title: "KRAKEN LOGO",
    category: "Logo Design",
    description: "Crafting a powerful, timeless mark for a deep-sea exploration collective.",
    image: "https://picsum.photos/seed/kraken/800/600"
  },
  {
    id: 6,
    title: "VELOCITY CAMPAIGN",
    category: "Social Media",
    description: "Dynamic brand direction for a next-gen electric bicycle company.",
    image: "https://picsum.photos/seed/velocity/800/600"
  }
];

export default function ProjectsGrid() {
  return (
    <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
        <div>
          <h2 className="text-[10px] uppercase tracking-[0.3em] font-medium text-zinc-500 mb-4">Selected Portfolio</h2>
          <p className="text-4xl md:text-6xl font-light tracking-tight leading-tight">
            Design is the <br /><span className="italic font-medium">silence</span> between news.
          </p>
        </div>
        <div className="flex gap-6">
          {['All', 'Branding', 'UI Design', 'Posters'].map(filter => (
            <button 
              key={filter}
              className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 hover:text-white transition-colors"
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="mt-32 text-center">
        <button className="px-12 py-5 border border-white/20 uppercase text-xs font-bold tracking-[0.3em] hover:bg-white hover:text-black transition-all">
          Explore All Artworks
        </button>
      </div>
    </section>
  );
}
