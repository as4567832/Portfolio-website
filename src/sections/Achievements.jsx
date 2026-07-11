import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTrophy, FaFlask, FaMedal, FaCodeBranch } from 'react-icons/fa';
import SectionHeading from '../components/SectionHeading';
import { achievements, achievementFilters } from '../data/achievements';

const typeIcons = {
  Award: FaTrophy,
  Competition: FaMedal,
  Research: FaFlask,
  'Open Source': FaCodeBranch,
};

const Achievements = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = achievements.filter((item) =>
    activeFilter === 'All' ? true : item.type === activeFilter
  );

  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Recognition" title="Achievements &" highlight="Awards" />

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {achievementFilters.map((filter) => (
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

        <div className="grid sm:grid-cols-2 gap-6">
          <AnimatePresence>
            {filtered.map((item, index) => {
              const Icon = typeIcons[item.type] || FaTrophy;
              return (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.05 }}
                  className="glass-card p-6 flex gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/15 text-accent flex items-center justify-center text-xl flex-shrink-0">
                    <Icon />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-secondary mb-1 block">{item.date}</span>
                    <h4 className="font-bold text-white mb-1">{item.title}</h4>
                    <span className="text-sm text-gray-400 mb-2 block">{item.organization}</span>
                    <p className="text-sm text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
