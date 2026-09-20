import { site } from '../data/site';
import BeforeAfterSlider from './BeforeAfterSlider';
import { IconCheck, IconWhatsApp } from './Icons';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">
            Serving {site.serviceArea} since {site.established}
          </span>
          <h1>
            Painting that makes your property look <span className="hl">newly built</span>.
          </h1>
          <p className="hero-lead">
            Interior, exterior, and commercial painting for homes and businesses.
            Proper prep, clean job sites, and a finish that still looks sharp years later.
          </p>

          <div className="hero-cta">
            <a className="btn btn-accent btn-lg" href="#estimate">Get a Free Quote</a>
            <a className="btn btn-whatsapp btn-lg" href={site.whatsappHref} target="_blank" rel="noreferrer">
              <IconWhatsApp /> WhatsApp Us
            </a>
            <a className="btn btn-outline btn-lg" href={site.phoneHref}>Call {site.phone}</a>
          </div>

          <ul className="hero-badges">
            <li><IconCheck /> Licensed</li>
            <li><IconCheck /> 20+ years experience</li>
            <li><IconCheck /> 5-year workmanship warranty</li>
          </ul>
        </div>

        <BeforeAfterSlider
          beforeImage="/images/before.jpg"
          afterImage="/images/after.jpg"
          title="Exterior repaint — Siaya County Club"
          meta="Full prep, caulk, prime & 2 coats · 4 days"
        />
      </div>
    </section>
  );
}
