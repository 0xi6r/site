import { site } from '../data/site';
import { IconLogo, IconPhone, IconMail, IconPin, IconClock, IconShield } from './Icons';

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
              Family-owned painting contractor serving {site.address} and surrounding communities since {site.established}.
              Interior, exterior and commercial painting done properly the first time.
            </p>
          </div>

          <div>
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a href="#services">Interior Painting</a></li>
              <li><a href="#services">Exterior Painting</a></li>
              <li><a href="#services">Commercial Painting</a></li>
              <li><a href="#services">Cabinet Refinishing</a></li>
              <li><a href="#services">Drywall Repair</a></li>
              <li><a href="#services">Deck &amp; Fence Staining</a></li>
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul className="footer-links">
              <li><a href="#work">Our Work</a></li>
              <li><a href="#process">Our Process</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#areas">Service Areas</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#estimate">Free Estimate</a></li>
            </ul>
          </div>

          <div>
            <h4>Get in touch</h4>
            <ul className="footer-contact">
              <li><IconPhone /><a href={site.phoneHref}>{site.phone}</a></li>
              <li><IconMail /><a href={site.emailHref}>{site.email}</a></li>
              <li><IconPin /><span>{site.address}</span></li>
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