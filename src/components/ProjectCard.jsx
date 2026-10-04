import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { GithubSvg } from './SocialIcon';
import './ProjectCard.css';

export default function ProjectCard({ project }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
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

  const isImageRight = project.layout === 'image-right';

  return (
    <motion.div
      className={`project-card ${isImageRight ? 'project-card--image-right' : 'project-card--image-left'}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {/* Image Section */}
      <motion.figure className="project-card__image-wrapper" variants={itemVariants}>
        <img
          src={project.image}
          alt={`${project.title} interface screenshot`}
          className="project-card__image"
          loading="lazy"
        />
        <figcaption className="project-card__image-caption">
          <span>PROJECT / {project.number}</span>
          <span>{project.client}</span>
        </figcaption>
      </motion.figure>

      {/* Content Section */}
      <motion.div className="project-card__content" variants={containerVariants}>
        {/* Project Number */}
        <motion.div className="project-card__number" variants={itemVariants}>
          {project.number}
        </motion.div>

        {/* Title */}
        <motion.h3 className="project-card__title" variants={itemVariants}>
          {project.title}
        </motion.h3>

        {/* Client */}
        <motion.p className="project-card__client" variants={itemVariants}>
          <span className="project-card__label">Client:</span> {project.client}
        </motion.p>

        {/* Description */}
        <motion.p className="project-card__description" variants={itemVariants}>
          {project.description}
        </motion.p>

        {/* Stack */}
        <motion.div className="project-card__stack" variants={itemVariants}>
          <span className="project-card__label">Stack:</span>
          <div className="project-card__stack-items">
            {project.stack.map((tech, idx) => (
              <span key={idx} className="project-card__stack-item">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        {project.features.some((feature) => !feature.startsWith('TODO:')) && (
          <motion.div className="project-card__features" variants={itemVariants}>
            <span className="project-card__label">Highlights</span>
            <ul className="project-card__features-list">
              {project.features.filter((feature) => !feature.startsWith('TODO:')).slice(0, 4).map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Role */}
        <motion.div className="project-card__role" variants={itemVariants}>
          <span className="project-card__label">My Role:</span>
          <p>{project.role}</p>
        </motion.div>

        {/* Links */}
        <motion.div className="project-card__links" variants={itemVariants}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <GithubSvg size={18} />
              GitHub
            </a>
          )}
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
