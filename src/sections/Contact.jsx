import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { GithubSvg, MailSvg } from '../components/SocialIcon';
import siteConfig from '../data/portfolio';
import './Contact.css';

export default function Contact() {
  const { contact } = siteConfig;

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
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          className="contact__content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Main CTA */}
          <motion.h2 className="contact__heading" variants={itemVariants}>
            LET'S BUILD SOMETHING USEFUL.
          </motion.h2>

          {/* Contact Links */}
          <motion.div className="contact__links" variants={containerVariants}>
            {contact.email && contact.email !== 'your-email@example.com' && (
              <motion.a
                href={`mailto:${contact.email}`}
                className="contact__link"
                variants={itemVariants}
              >
                <MailSvg size={24} />
                <span>{contact.email}</span>
              </motion.a>
            )}

            {contact.phone && (
              <motion.a
                href={`tel:${contact.phone}`}
                className="contact__link"
                variants={itemVariants}
              >
                <Phone size={24} aria-hidden="true" />
                <span>{contact.phone}</span>
              </motion.a>
            )}

            {contact.github && contact.github !== 'https://github.com' && (
              <motion.a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__link"
                variants={itemVariants}
              >
                <GithubSvg size={24} />
                <span>GitHub</span>
              </motion.a>
            )}
          </motion.div>

          {/* Fallback message if no contact info */}
          {(!contact.email || contact.email === 'your-email@example.com') &&
            !contact.phone &&
            (!contact.github || contact.github === 'https://github.com') && (
              <motion.p className="contact__placeholder" variants={itemVariants}>
                Contact information coming soon. Check back later!
              </motion.p>
            )}
        </motion.div>
      </div>
    </section>
  );
}
