import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaAward } from 'react-icons/fa';
import SectionHeading from '../components/SectionHeading';
import Modal from '../components/Modal';
import { certificates } from '../data/certificates';

const Certificates = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="certificates" className="py-20 relative bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Verified Learning" title="My" highlight="Certificates" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="glass-card overflow-hidden cursor-pointer group"
              onClick={() => setSelected(cert)}
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <FaAward className="text-3xl text-white" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-white text-sm mb-1 line-clamp-2">{cert.title}</h3>
                <p className="text-xs text-gray-400">{cert.organization}</p>
                <p className="text-xs text-gray-500 mt-1">{cert.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Modal isOpen={!!selected} onClose={() => setSelected(null)}>
        {selected && (
          <div>
            <img src={selected.image} alt={selected.title} className="w-full rounded-xl mb-6 max-h-[50vh] object-cover" />
            <h3 className="text-xl font-bold text-white mb-2">{selected.title}</h3>
            <p className="text-gray-400 mb-1">{selected.organization}</p>
            <p className="text-gray-500 text-sm mb-4">{selected.date}</p>
            {selected.url && selected.url !== '#' && (
              <a
                href={selected.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors text-sm font-medium"
              >
                View Certificate <FaExternalLinkAlt size={12} />
              </a>
            )}
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Certificates;
