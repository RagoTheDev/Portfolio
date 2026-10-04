import { motion } from 'framer-motion';
import {
  Code,
  Server,
  Database,
  Zap,
  File,
  Filter,
  Shuffle,
  GitBranch,
  Terminal,
  Network,
} from 'lucide-react';
import siteConfig from '../data/portfolio';
import './Skills.css';

const iconMap = {
  code: Code,
  server: Server,
  database: Database,
  zap: Zap,
  file: File,
  filter: Filter,
  shuffle: Shuffle,
  gitBranch: GitBranch,
  terminal: Terminal,
  network: Network,
};

function SkillCategory({ title, skills }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.div
      className="skill-category"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      <h3 className="skill-category__title">{title}</h3>
      <motion.div className="skill-category__list" variants={containerVariants}>
        {skills.map((skill, index) => {
          const IconComponent = iconMap[skill.icon] || Code;
          return (
            <motion.div key={index} className="skill-item" variants={itemVariants}>
              <IconComponent size={20} className="skill-item__icon" />
              <span className="skill-item__name">{skill.name}</span>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}

export default function Skills() {
  const { stack } = siteConfig;

  const categories = [
    { title: 'Frontend', skills: stack.frontend },
    { title: 'Backend', skills: stack.backend },
    { title: 'Database', skills: stack.database },
    { title: 'Automation & Data', skills: stack.automation },
    { title: 'Other', skills: stack.other },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.h2
          className="skills__heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          TECHNICAL STACK
        </motion.h2>

        <div className="skills__grid">
          {categories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
