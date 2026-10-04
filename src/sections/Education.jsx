import { motion } from 'framer-motion';
import siteConfig from '../data/portfolio';
import './Education.css';

export default function Education() {
  const { education, developing } = siteConfig;

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
    <section className="education">
      <div className="container">
        <motion.div
          className="education__content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Formal Education */}
          <motion.div className="education__section" variants={itemVariants}>
            <h3 className="education__section-title">Education</h3>
            {education.formal.map((edu, index) => (
              <div key={index} className="education__item">
                <div className="education__item-header">
                  <h4 className="education__degree">{edu.degree}</h4>
                  <span className="education__status">{edu.status}</span>
                </div>
                <p className="education__institution">{edu.institution}</p>
                <div className="education__areas">
                  {edu.areas.map((area, idx) => (
                    <span key={idx} className="education__area-tag">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Training & Bootcamps */}
          <motion.div className="education__section" variants={itemVariants}>
            <h3 className="education__section-title">Training & Bootcamps</h3>
            {education.training.map((training, index) => (
              <div key={index} className="education__item">
                <h4 className="education__training-name">{training.name}</h4>
                {training.path && (
                  <p className="education__path">{training.path}</p>
                )}
                <div className="education__courses">
                  {(training.courses || training.technologies || []).map((course, idx) => (
                    <span key={idx} className="education__course-tag">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Currently Developing */}
          <motion.div className="education__section" variants={itemVariants}>
            <h3 className="education__section-title">Currently Developing</h3>
            <div className="education__developing">
              {developing.map((skill, index) => (
                <span key={index} className="education__developing-tag">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
