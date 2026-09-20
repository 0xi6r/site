import { areas } from '../data/areas';
import { site } from '../data/site';
import { IconPin } from './Icons';

export default function Areas() {
  return (
    <section className="section" id="areas">
      <div className="container areas-in">
        <div>
          <span className="eyebrow">Where we work</span>
          <h2 style={{ marginTop: '.8rem' }}>Proudly serving {site.address} &amp; nearby communities</h2>
          <p style={{ marginTop: '1rem' }}>
            Our crews are based in {site.address} and cover a wide radius.
            If you don't see your town listed, call us — we take on larger commercial projects further out.
          </p>
          <div className="area-note">
            <strong>Not sure if we cover you?</strong> Call{' '}
            <a href={site.phoneHref} style={{ color: 'var(--accent-dark)', fontWeight: 700 }}>
              {site.phone}
            </a>{' '}
            and we'll confirm in under a minute.
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