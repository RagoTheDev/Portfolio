import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import siteConfig from '../data/portfolio';
import './Hero.css';

export default function Hero() {
  const { hero } = siteConfig;

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
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <motion.div
          className="hero__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="hero__copy">
            <motion.p className="hero__eyebrow" variants={itemVariants}>
              FULL-STACK DEVELOPER / JERRY JOHN SWIGO
            </motion.p>
            {/* Main Heading */}
            <motion.h1 className="hero__title" variants={itemVariants}>
              {hero.mainMessage}
            </motion.h1>

            {/* Supporting Text */}
            <motion.p className="hero__subtitle" variants={itemVariants}>
              {hero.supportingText}
            </motion.p>

            {/* Tech Stack */}
            <motion.div className="hero__skills" variants={itemVariants}>
              {hero.skills.map((skill) => (
                <span key={skill} className="hero__skill-tag">
                  {skill}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div className="hero__cta" variants={itemVariants}>
              <a className="btn btn-primary" href="#projects">
                View My Work
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a className="btn btn-secondary" href="#contact">
                Contact Me
              </a>
            </motion.div>
          </div>
          <motion.figure className="hero__portrait" variants={itemVariants}>
            <img src="/me.jpeg" alt="Portrait of Jerry John Swigo" fetchPriority="high" />
            <figcaption>JERRY JOHN SWIGO <span>— THE PERSON BEHIND THE CODE</span></figcaption>
          </motion.figure>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="hero__scroll"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="hero__scroll-dot" />
        </motion.div>
      </div>
    </section>
  );
}
