import { useRef, useState } from 'react';

export default function BeforeAfterSlider({
  title = 'Exterior repaint — Siaya County Club',
  meta  = 'Full prep, caulk, prime & 2 coats · 4 days',
  beforeImage,
  afterImage,
}) {
  const [pos, setPos] = useState(52);
  const [dragging, setDragging] = useState(false);
  const wrapRef = useRef(null);

  const setFromClientX = (clientX) => {
    const rect = wrapRef.current.getBoundingClientRect();
    let pct = ((clientX - rect.left) / rect.width) * 100;
    pct = Math.max(2, Math.min(98, pct));
    setPos(pct);
  };

  const onPointerDown = (e) => {
    setDragging(true);
    wrapRef.current.setPointerCapture(e.pointerId);
    setFromClientX(e.clientX);
  };
  const onPointerMove = (e) => dragging && setFromClientX(e.clientX);
  const onPointerUp    = () => setDragging(false);

  const onKeyDown = (e) => {
    let next = pos;
    if (e.key === 'ArrowLeft')  next = pos - 4;
    if (e.key === 'ArrowRight') next = pos + 4;
    if (e.key === 'Home')       next = 2;
    if (e.key === 'End')        next = 98;
    if (next !== pos) {
      e.preventDefault();
      setPos(Math.max(2, Math.min(98, next)));
    }
  };

  return (
    <div className="ba-wrap">
      <div className="ba-card">
        <div
          className="ba"
          ref={wrapRef}
          style={{ '--pos': `${pos}%` }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          <div className="ba-layer ba-after">
            {afterImage
              ? <img src={afterImage} alt="After" className="ba-img" />
              : <><div className="ba-floor" /><div className="ba-base" /></>}
          </div>
          <div className="ba-layer ba-before">
            {beforeImage
              ? <img src={beforeImage} alt="Before" className="ba-img" />
              : <><div className="ba-floor" /><div className="ba-base" /></>}
          </div>

          <span className="ba-tag ba-tag--l">Before</span>
          <span className="ba-tag ba-tag--r">After</span>

          <div
            className="ba-handle"
            tabIndex={0}
            role="slider"
            aria-label="Drag to compare before and after"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(pos)}
            onKeyDown={onKeyDown}
          >
            <span className="ba-knob">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 7l-5 5 5 5M15 7l5 5-5 5" />
              </svg>
            </span>
          </div>

          <div className="ba-caption">
            <div>
              <strong>{title}</strong>
              <span>{meta}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="ba-float">
        <div>
          <div className="stars" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} viewBox="0 0 24 24">
                <path d="M12 2l3 6.6 7 .9-5 4.8 1.2 7L12 18l-6.2 3.3L7 14.3l-5-4.8 7-.9z" />
              </svg>
            ))}
          </div>
          <div className="lbl" style={{ marginTop: 4 }}>4.9 · 380 reviews</div>
        </div>
      </div>
    </div>
  );
}