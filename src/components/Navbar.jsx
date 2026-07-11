import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useLocation, useNavigate, Link as RouterLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Services', to: 'services' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Timeline', to: 'timeline' },
  { name: 'Education', to: 'education' },
  { name: 'Certificates', to: 'certificates' },
  { name: 'Gallery', to: 'gallery' },
  { name: 'Blog', to: 'blog' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (to) => {
    setIsOpen(false);
    if (!isHome) {
      navigate('/', { state: { scrollTarget: to } });
    }
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <RouterLink
              to="/"
              onClick={() => handleNavClick('home')}
              className="cursor-pointer text-2xl font-bold text-gradient"
            >
              Portfolio.
            </RouterLink>
          </div>
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navLinks.map((link) =>
                isHome ? (
                  <ScrollLink
                    key={link.name}
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    spy={true}
                    activeClass="text-primary border-b-2 border-primary"
                    className="text-gray-300 hover:text-white cursor-pointer px-2 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {link.name}
                  </ScrollLink>
                ) : (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.to)}
                    className="text-gray-300 hover:text-white cursor-pointer px-2 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {link.name}
                  </button>
                )
              )}
            </div>
          </div>
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden glass absolute w-full left-0 top-full max-h-[80vh] overflow-y-auto"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) =>
                isHome ? (
                  <ScrollLink
                    key={link.name}
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
                  >
                    {link.name}
                  </ScrollLink>
                ) : (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.to)}
                    className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer w-full text-left"
                  >
                    {link.name}
                  </button>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
