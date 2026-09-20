import { reviews } from '../data/reviews';
import { IconStar } from './Icons';

export default function Reviews() {
  return (
    <section className="section section--sand" id="reviews">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow">What clients say</span>
          <h2 style={{ marginTop: '.8rem' }}>Trusted by homeowners &amp; property managers</h2>
        </div>

        <div className="reviews-grid">
          {reviews.map((r) => (
            <article className="review" key={r.name}>
              <div className="stars" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => <IconStar key={i} />)}
              </div>
              <blockquote>{r.text}</blockquote>
              <div className="reviewer">
                <span className="avatar">{r.initials}</span>
                <div>
                  <strong>{r.name}</strong>
                  <span>{r.meta}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}