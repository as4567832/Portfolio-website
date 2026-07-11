import { motion } from 'framer-motion';
import { FaGraduationCap, FaBook } from 'react-icons/fa';
import SectionHeading from '../components/SectionHeading';
import { education, courses } from '../data/education';

const Education = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Academic Background" title="My" highlight="Education" />

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-8 text-white flex items-center gap-3">
              <span className="p-2 bg-accent/20 text-accent rounded-lg"><FaGraduationCap /></span> Academic Timeline
            </h3>
            <div className="relative border-l-2 border-accent/30 ml-4 space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-8"
                >
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-accent shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
                  <div className="glass-card p-6">
                    <span className="text-xs font-bold text-secondary mb-1 block">{edu.date}</span>
                    <h4 className="text-lg font-bold text-white mb-1">{edu.title}</h4>
                    <span className="text-sm font-medium text-gray-400 mb-2 block">{edu.institution}</span>
                    <p className="text-sm text-gray-300 mb-3">{edu.description}</p>
                    <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-primary font-semibold">
                      {edu.score}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-8 text-white flex items-center gap-3">
              <span className="p-2 bg-primary/20 text-primary rounded-lg"><FaBook /></span> Courses
            </h3>
            <div className="space-y-4">
              {courses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-5"
                >
                  <h4 className="font-semibold text-white text-sm mb-1">{course.name}</h4>
                  <p className="text-xs text-gray-400">{course.provider} &middot; {course.date}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
