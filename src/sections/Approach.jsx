import { motion } from 'framer-motion';
import siteConfig from '../data/portfolio';
import './Approach.css';

export default function Approach() {
  const { approach } = siteConfig;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="approach">
      <div className="container">
        <motion.h2
          className="approach__heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          {approach.heading}
        </motion.h2>

        <motion.div
          className="approach__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {approach.sections.map((section, index) => (
            <motion.div key={index} className="approach__item" variants={itemVariants}>
              <div className="approach__number">{String(index + 1).padStart(2, '0')}</div>
              <h3 className="approach__title">{section.title}</h3>
              <p className="approach__description">{section.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
