import { areas } from '../data/areas';
import { site } from '../data/site';
import { IconPin } from './Icons';

export default function Areas() {
  return (
    <section className="section" id="areas">
      <div className="container areas-in">
        <div>
          <span className="eyebrow">Where we work</span>
          <h2 style={{ marginTop: '.8rem' }}>Based in {site.address}, serving {site.serviceArea}</h2>
          <p style={{ marginTop: '1rem' }}>
            ICEARK works with residential houses, retail shops, offices, apartments, hotels,
            hospitals, schools, colleges, libraries, and industrial warehousing projects.
          </p>
          <div className="area-note">
            <strong>Not sure if we cover you?</strong> Call{' '}
            <a href={site.phoneHref} style={{ color: 'var(--accent-dark)', fontWeight: 700 }}>
              {site.phone}
            </a>{' '}
            and we'll confirm availability for your location and project scope.
          </div>
        </div>

        <div className="area-chips">
          {areas.map((a) => (
            <a className="area-chip" href="#estimate" key={a}>
              <IconPin /> {a}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
