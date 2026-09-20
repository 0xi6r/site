import { services } from '../data/services';
import { serviceIcons, IconArrow } from './Icons';

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow">What we do</span>
          <h2 style={{ marginTop: '.8rem' }}>Painting services for every surface</h2>
          <p>From a single room refresh to a full commercial repaint — same crew, same prep standards, same clean finish.</p>
        </div>

        <div className="services-grid">
          {services.map((s) => {
            const Icon = serviceIcons[s.icon];
            return (
              <article className="svc" key={s.title}>
                <div className="svc-icon"><Icon /></div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <a className="svc-link" href="#estimate">
                  {s.cta} <IconArrow />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}