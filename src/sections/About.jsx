import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import * as ReactCountUp from 'react-countup';
import { FaCheckCircle } from 'react-icons/fa';
import { profile } from '../data/profile';

// Some bundlers don't unwrap the CJS default export of react-countup correctly
const CountUp = ReactCountUp.default?.default ?? ReactCountUp.default;

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About <span className="text-gradient">Me</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <h3 className="text-2xl font-bold mb-4">My Journey</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              {profile.aboutText}
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              I love bridging the gap between hardware and software, creating systems that are not only intelligent but also seamlessly connected. From drafting PCBs to writing complex AI models, I enjoy every part of the development lifecycle.
            </p>
            <div className="border-t border-white/10 pt-6">
              <h4 className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">Career Objective</h4>
              <p className="text-gray-300 leading-relaxed">{profile.careerObjective}</p>
            </div>
          </motion.div>

          <div className="flex flex-col gap-6" ref={ref}>
            <div className="grid grid-cols-2 gap-6">
              {profile.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass p-6 rounded-2xl text-center hover:border-primary/50 transition-colors"
                >
                  <div className="text-4xl font-bold text-primary mb-2">
                    {inView ? <CountUp end={stat.value} duration={2.5} /> : '0'}
                    +
                  </div>
                  <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6"
            >
              <h4 className="text-sm font-semibold text-secondary uppercase tracking-wider mb-4">Interesting Facts</h4>
              <ul className="space-y-3">
                {profile.funFacts.map((fact, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300 text-sm">
                    <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
