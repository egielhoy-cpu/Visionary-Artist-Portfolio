import { motion } from 'motion/react';
import { ArrowRight, Mail, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-[10px] uppercase tracking-[0.3em] font-medium text-zinc-500 mb-6">Get In Touch</h2>
          <h3 className="text-5xl md:text-8xl font-light tracking-tight leading-[0.85]">
            READY TO START <br /><span className="italic font-medium">NEW</span> PROJECT?
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-12">
            <div className="group cursor-pointer">
              <p className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 mb-2">Email Me</p>
              <div className="flex items-center gap-4 text-2xl md:text-3xl font-light">
                hello@elaravance.design
                <ArrowRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform" />
              </div>
            </div>

            <div>
              <p className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 mb-6">Socials</p>
              <div className="flex gap-4">
                {[
                  { icon: Instagram, label: 'Instagram' },
                  { icon: Twitter, label: 'Twitter' },
                  { icon: Linkedin, label: 'LinkedIn' }
                ].map((social) => (
                  <a 
                    key={social.label}
                    href="#" 
                    className="p-4 border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all font-medium text-xs uppercase tracking-widest"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="glass p-8 md:p-12 space-y-8 rounded-sm">
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">Your Name</label>
              <input 
                type="text" 
                className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-white transition-colors text-sm"
                placeholder="Name"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">Email Address</label>
              <input 
                type="email" 
                className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-white transition-colors text-sm"
                placeholder="Email"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">Message</label>
              <textarea 
                rows={4}
                className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-white transition-colors resize-none text-sm"
                placeholder="Bridge the vision..."
              />
            </div>
            <button className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-zinc-200 transition-all">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
