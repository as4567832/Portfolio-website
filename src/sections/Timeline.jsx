import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { experience, experienceFilters } from '../data/experience';

const typeIcons = {
  Experience: '💼',
  Internship: '🧑‍💻',
  Training: '🎯',
  Hackathon: '🏆',
  Workshop: '🛠️',
  Research: '🔬',
};

const Timeline = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = experience.filter((item) =>
    activeFilter === 'All' ? true : item.type === activeFilter
  );

  return (
    <section id="timeline" className="py-20 relative bg-black/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Where I've Been"
          title="My"
          highlight="Timeline"
          description="Internships, training, hackathons, workshops, research, and professional experience."
        />

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {experienceFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter
                  ? 'bg-primary text-white shadow-[0_0_10px_rgba(59,130,246,0.5)]'
                  : 'glass text-gray-400 hover:text-white hover:border-primary/50'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="relative border-l-2 border-primary/30 ml-4 space-y-8">
          <AnimatePresence>
            {filtered.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: index * 0.05 }}
                className="relative pl-8"
              >
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                <div className="glass-card p-6">
                  <div className="flex items-center justify-between mb-1 flex-wrap gap-2">
                    <span className="text-xs font-bold text-secondary">{item.date}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-300">
                      {typeIcons[item.type]} {item.type}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">{item.role}</h4>
                  <span className="text-sm font-medium text-gray-400 mb-3 block">{item.company}</span>
                  <p className="text-sm text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
