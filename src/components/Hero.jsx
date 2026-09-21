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
            Building finishes crafted for <span className="hl">lasting impact</span>.
          </h1>
          <p className="hero-lead">
            ICEARK Enterprises delivers painting, decoration, special effects, epoxy flooring,
            glazing, gypsum, tiling, and fittings for residential, commercial, institutional,
            and industrial projects.
          </p>

          <div className="hero-cta">
            <a className="btn btn-accent btn-lg" href="#estimate">Get Quote</a>
            <a className="btn btn-whatsapp btn-lg" href={site.whatsappHref} target="_blank" rel="noreferrer">
              <IconWhatsApp /> WhatsApp Us
            </a>
            <a className="btn btn-outline btn-lg" href={site.phoneHref}>Call {site.phone}</a>
          </div>

          <ul className="hero-badges">
            <li><IconCheck /> Registered Kenyan-owned firm</li>
            <li><IconCheck /> Founded 17 March 2010</li>
            <li><IconCheck /> Quality, safety & accountability</li>
          </ul>
        </div>

        <BeforeAfterSlider
          beforeImage="/images/before.jpg"
          afterImage="/images/after.jpg"
          title="Exterior finish — Siaya County Club"
          meta="Preparation, coating, detailing & final clean-up"
        />
      </div>
    </section>
  );
}
