import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import SectionHeading from '../components/SectionHeading';
import { blogs, blogFilters } from '../data/blogs';

const Blog = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = blogs.filter((post) =>
    activeFilter === 'All' ? true : post.category === activeFilter
  );

  return (
    <section id="blog" className="py-20 relative bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Thoughts & Writing" title="Latest From The" highlight="Blog" />

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {blogFilters.map((filter) => (
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filtered.map((post, index) => (
              <motion.div
                layout
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ delay: index * 0.06 }}
                className="glass-card overflow-hidden group flex flex-col"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <span className="text-secondary font-semibold bg-secondary/10 px-2 py-1 rounded-md">{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 flex-grow">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                    <span className="text-xs text-gray-500">{post.date}</span>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-primary hover:text-secondary text-sm font-medium flex items-center gap-1 transition-colors"
                    >
                      Read More <FaArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Blog;
