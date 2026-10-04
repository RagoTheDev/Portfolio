import { motion } from 'framer-motion';
import siteConfig from '../data/portfolio';
import './About.css';

export default function About() {
  const { about } = siteConfig;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="about__content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Heading */}
          <motion.h2 className="about__heading" variants={itemVariants}>
            {about.heading}
          </motion.h2>

          {/* Name */}
          <motion.h3 className="about__name" variants={itemVariants}>
            {about.name}
          </motion.h3>

          {/* Paragraphs */}
          <div className="about__text">
            {about.paragraphs.map((paragraph, index) => (
              <motion.p key={index} variants={itemVariants}>
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
