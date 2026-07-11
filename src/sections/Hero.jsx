import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { profile } from '../data/profile';
import { socials } from '../data/socials';
import { FaDownload, FaEye, FaPaperPlane } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Animated Blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/30 rounded-full mix-blend-screen filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-secondary/30 rounded-full mix-blend-screen filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-accent/30 rounded-full mix-blend-screen filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-gradient">{profile.name}</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-300 mb-6 h-[40px] md:h-[60px]">
              <TypeAnimation
                sequence={[
                  ...profile.roles.flatMap(role => [role, 2000])
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto md:mx-0">
              {profile.careerObjective}
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8">
              <a
                href={profile.resumeUrl}
                download
                className="px-6 py-3 bg-primary hover:bg-primary/80 text-white rounded-full font-medium flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(59,130,246,0.5)]"
              >
                <FaDownload /> Download Resume
              </a>
              <ScrollLink to="projects" smooth={true} duration={500} offset={-70} className="cursor-pointer px-6 py-3 glass hover:bg-white/10 text-white rounded-full font-medium flex items-center gap-2 transition-all">
                <FaEye /> View Projects
              </ScrollLink>
              <ScrollLink to="contact" smooth={true} duration={500} offset={-70} className="cursor-pointer px-6 py-3 bg-gradient-to-r from-secondary to-accent hover:opacity-90 text-white rounded-full font-medium flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                <FaPaperPlane /> Hire Me
              </ScrollLink>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-6">
              {socials.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Icon size={24} />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center md:justify-end"
          >
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full blur-2xl opacity-50"></div>
              <img 
                src={profile.heroImage} 
                alt="Profile" 
                className="w-full h-full object-cover rounded-full border-4 border-white/10 relative z-10 shadow-2xl"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
