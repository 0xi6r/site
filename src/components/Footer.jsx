import { site } from '../data/site';
import { IconLogo, IconPhone, IconMail, IconPin, IconClock, IconShield, IconWhatsApp } from './Icons';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <a className="logo" href="#top">
              <span className="logo-mark"><IconLogo /></span>
              <span className="logo-text">
                {site.brandPrimary}
                <em>{site.brandSecondary}</em>
              </span>
            </a>
            <p className="footer-about">
              Kenyan-owned building and construction firm serving {site.serviceArea} since {site.established}.
              Painting, decoration, epoxy flooring, glazing, gypsum, tiling, and fittings done with professional care.
            </p>
          </div>

          <div>
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a href="#services">Interior Painting</a></li>
              <li><a href="#services">Special Effects</a></li>
              <li><a href="#services">Epoxy Flooring</a></li>
              <li><a href="#services">Glazing Works</a></li>
              <li><a href="#services">Gypsum Works</a></li>
              <li><a href="#services">Tiling &amp; Fittings</a></li>
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul className="footer-links">
              <li><a href="#work">Our Work</a></li>
              <li><a href="#process">Our Process</a></li>
              <li><a href="#areas">Service Areas</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#estimate">Get Quote</a></li>
            </ul>
          </div>

          <div>
            <h4>Get in touch</h4>
            <ul className="footer-contact">
              <li><IconPhone /><a href={site.phoneHref}>{site.phone}</a></li>
              <li><IconPhone /><a href={site.altPhoneHref}>{site.altPhone}</a></li>
              <li><IconWhatsApp /><a href={site.whatsappHref} target="_blank" rel="noreferrer">Chat on WhatsApp</a></li>
              <li><IconMail /><a href={site.emailHref}>{site.email}</a></li>
              <li><IconPin /><span>{site.address}</span></li>
              <li><IconPin /><span>{site.postal}</span></li>
              <li><IconClock /><span>{site.hours}</span></li>
              <li><IconShield /><span>{site.license}</span></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {site.fullName}. All rights reserved.</span>
          <span>
            <a href="#">Privacy Policy</a> &nbsp;·&nbsp;
            <a href="#">Terms of Service</a> &nbsp;·&nbsp;
            <a href="#">Accessibility</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
