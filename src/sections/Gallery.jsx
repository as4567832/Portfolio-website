import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaExpand } from 'react-icons/fa';
import SectionHeading from '../components/SectionHeading';
import Modal from '../components/Modal';
import { gallery } from '../data/gallery';

const categories = ['All', ...new Set(gallery.map((item) => item.category))];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeIndex, setActiveIndex] = useState(null);

  const filtered = gallery.filter((item) =>
    activeFilter === 'All' ? true : item.category === activeFilter
  );

  const openLightbox = (index) => setActiveIndex(index);
  const closeLightbox = () => setActiveIndex(null);
  const showPrev = () => setActiveIndex((i) => (i - 1 + filtered.length) % filtered.length);
  const showNext = () => setActiveIndex((i) => (i + 1) % filtered.length);

  const active = activeIndex !== null ? filtered[activeIndex] : null;

  return (
    <section id="gallery" className="py-20 relative bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Behind The Scenes" title="Photo" highlight="Gallery" />

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === cat
                  ? 'bg-primary text-white shadow-[0_0_10px_rgba(59,130,246,0.5)]'
                  : 'glass text-gray-400 hover:text-white hover:border-primary/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          <AnimatePresence>
            {filtered.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05 }}
                className="mb-6 break-inside-avoid relative group cursor-pointer rounded-2xl overflow-hidden glass-card"
                onClick={() => openLightbox(index)}
              >
                <img src={item.image} alt={item.caption} loading="lazy" className="w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-end p-4 opacity-0 group-hover:opacity-100">
                  <div className="flex items-center gap-2 text-white text-sm font-medium">
                    <FaExpand /> {item.caption}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <Modal isOpen={active !== null} onClose={closeLightbox}>
        {active && (
          <div className="relative">
            <img src={active.image} alt={active.caption} className="w-full rounded-xl max-h-[65vh] object-contain mx-auto" />
            <p className="text-center text-gray-300 mt-4">{active.caption}</p>
            <div className="flex justify-between mt-4">
              <button
                onClick={(e) => { e.stopPropagation(); showPrev(); }}
                aria-label="Previous image"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center text-white transition-colors"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); showNext(); }}
                aria-label="Next image"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center text-white transition-colors"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Gallery;
