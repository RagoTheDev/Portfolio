import { Phone } from 'lucide-react';
import { GithubSvg, MailSvg } from './SocialIcon';
import siteConfig from '../data/portfolio';
import './Footer.css';

export default function Footer() {
  const { name, title, contact, footer } = siteConfig;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          {/* Brand */}
          <div className="footer__brand">
            <h3 className="footer__name">{name}</h3>
            <p className="footer__title">{title}</p>
          </div>

          {/* Social Links */}
          <div className="footer__links">
            {contact.phone && (
              <a
                href={`tel:${contact.phone}`}
                className="footer__link"
                aria-label={`Call ${contact.phone}`}
              >
                <Phone size={20} aria-hidden="true" />
              </a>
            )}

            {contact.github && contact.github !== 'https://github.com' && (
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link"
                aria-label="GitHub"
              >
                <GithubSvg size={20} />
              </a>
            )}

            {contact.email && contact.email !== 'your-email@example.com' && (
              <a
                href={`mailto:${contact.email}`}
                className="footer__link"
                aria-label="Email"
              >
                <MailSvg size={20} />
              </a>
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="footer__bottom">
          <p className="footer__copyright">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
