import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { projects, projectFilters } from '../data/projects';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'All') return true;
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">My <span className="text-gradient">Projects</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {projectFilters.map((filter) => (
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
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                key={project.id}
              >
                <Tilt
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  perspective={1000}
                  scale={1.02}
                  transitionSpeed={2000}
                  className="h-full"
                >
                  <div className="glass-card overflow-hidden h-full flex flex-col group">
                    <div className="relative overflow-hidden h-48">
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10"></div>
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      {project.featured && (
                        <div className="absolute top-4 left-4 z-20 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                          Featured
                        </div>
                      )}
                    </div>
                    
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                      <p className="text-gray-400 text-sm mb-4 flex-grow">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.techStack.map(tech => (
                          <span key={tech} className="text-xs text-secondary bg-secondary/10 px-2 py-1 rounded-md border border-secondary/20">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex justify-between items-center border-t border-white/10 pt-4 mt-auto">
                        <span className="text-xs text-gray-500">{project.date}</span>
                        <div className="flex gap-4">
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <FaGithub size={20} />
                          </a>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <FaExternalLinkAlt size={18} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
