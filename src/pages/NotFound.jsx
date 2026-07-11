import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome } from 'react-icons/fa';

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-primary/20 rounded-full mix-blend-screen filter blur-3xl opacity-70 animate-blob" />
      <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-accent/20 rounded-full mix-blend-screen filter blur-3xl opacity-70 animate-blob animation-delay-2000" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center"
      >
        <h1 className="text-8xl md:text-9xl font-bold text-gradient mb-4">404</h1>
        <p className="text-xl text-gray-300 mb-8">Oops! The page you're looking for doesn't exist.</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/80 text-white rounded-full font-medium transition-all shadow-[0_0_15px_rgba(59,130,246,0.5)]"
        >
          <FaHome /> Back to Home
        </Link>
      </motion.div>
    </section>
  );
};

export default NotFound;
