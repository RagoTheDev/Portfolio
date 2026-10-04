import { motion } from 'framer-motion';
import siteConfig from '../data/portfolio';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

export default function Projects() {
  const { projects } = siteConfig;

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2
          className="projects__heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          SELECTED PROJECTS
        </motion.h2>

        <div className="projects__list">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
