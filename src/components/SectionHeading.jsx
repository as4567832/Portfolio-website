import { motion } from 'framer-motion';

const SectionHeading = ({ eyebrow, title, highlight, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16 max-w-2xl mx-auto"
    >
      {eyebrow && (
        <span className="text-secondary text-sm font-semibold uppercase tracking-widest mb-2 block">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-bold mb-4">
        {title} {highlight && <span className="text-gradient">{highlight}</span>}
      </h2>
      <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
      {description && <p className="text-gray-400 mt-6">{description}</p>}
    </motion.div>
  );
};

export default SectionHeading;
