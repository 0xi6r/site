import { useRef, useState } from 'react';
import { faqs } from '../data/faqs';
import { IconPlus } from './Icons';

function FaqItem({ q, a, open, onToggle }) {
  const bodyRef = useRef(null);
  return (
    <div className={`faq-item${open ? ' is-open' : ''}`}>
      <button
        className="faq-q"
        aria-expanded={open}
        onClick={onToggle}
      >
        {q}
        <span className="faq-icon"><IconPlus /></span>
      </button>
      <div
        className="faq-a"
        ref={bodyRef}
        style={{ maxHeight: open ? bodyRef.current?.scrollHeight : null }}
      >
        <p>{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section className="section section--sand" id="faq">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow">Questions</span>
          <h2 style={{ marginTop: '.8rem' }}>Answers before you call</h2>
        </div>

        <div className="faq">
          {faqs.map((f, i) => (
            <FaqItem
              key={f.q}
              q={f.q}
              a={f.a}
              open={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}