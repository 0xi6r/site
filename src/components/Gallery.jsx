import { useState } from 'react';
import { projects } from '../data/projects';
import { IconPin, IconClock } from './Icons';

const FILTERS = [
  { key: 'all',        label: 'All Projects' },
  { key: 'interior',   label: 'Interior' },
  { key: 'exterior',   label: 'Exterior' },
  { key: 'commercial', label: 'Commercial' },
  { key: 'cabinets',   label: 'Cabinets' },
];

const PLACEHOLDER_STYLES = [
  { wall: '#DDE7F0', floor: '#B98E5E', base: '#FBF8F2' },
  { wall: '#EDE7DC', floor: '#A87B4C', base: '#FBF8F2', block: '#2E4B63' },
  { wall: '#E4E9EE', floor: '#8C8C8C', base: '#FFFFFF' },
  { wall: '#F1EDE6', floor: '#9A7A55', base: '#FBF8F2', block: '#1F3A4D' },
  { wall: '#DCE4D8', floor: '#8A7A62', base: '#FBF8F2' },
  { wall: '#E8E2D6', floor: '#B08D5F', base: '#FBF8F2', block: '#C9A227' },
];

export default function Gallery() {
  const [filter, setFilter] = useState('all');

  return (
    <section className="section section--sand" id="work">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Recent projects</span>
          <h2 style={{ marginTop: '.8rem' }}>Real jobs, real results</h2>
          <p>A sample of recent work. Every project gets the same prep-first approach.</p>
        </div>

        <div className="filters">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              className={`chip${filter === f.key ? ' is-active' : ''}`}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="gallery">
          {projects.map((p, i) => {
            const show = filter === 'all' || p.cat === filter;
            const ph = PLACEHOLDER_STYLES[i % PLACEHOLDER_STYLES.length];
            return (
              <article
                key={p.id}
                className={`work-card${show ? '' : ' is-hidden'}`}
                data-cat={p.cat}
              >
                <div className="work-media">
                  {p.image ? (
                    <img src={p.image} alt={p.title} />
                  ) : (
                    <div
                      className="ph"
                      style={{
                        '--wall': ph.wall, '--floor': ph.floor, '--base': ph.base,
                        position: 'absolute', inset: 0,
                      }}
                    >
                      <span className="ph-base" />
                      {ph.block && <span className="ph-accent" style={{ '--block': ph.block }} />}
                    </div>
                  )}
                  <span className="work-badge">{p.badge}</span>
                </div>
                <div className="work-body">
                  <h3>{p.title}</h3>
                  <p className="work-result">{p.result}</p>
                  <ul className="work-meta">
                    <li><IconPin /> {p.location}</li>
                    <li><IconClock /> {p.duration}</li>
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
