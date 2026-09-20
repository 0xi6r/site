import { useRef, useState } from 'react';

export default function BeforeAfterSlider({
  title = 'Exterior repaint - Siaya County Club',
  meta = 'Full prep, caulk, prime & 2 coats - 4 days',
  beforeImage,
  afterImage,
}) {
  const [position, setPosition] = useState(54);
  const sliderRef = useRef(null);

  const updatePosition = (clientX) => {
    const rect = sliderRef.current?.getBoundingClientRect();
    if (!rect) return;
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(92, Math.max(8, next)));
  };

  const startDrag = (event) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    updatePosition(event.clientX);
  };

  return (
    <div className="ba-wrap">
      <div className="ba-showcase-head">
        <span className="eyebrow">See the difference</span>
        <strong>Drag to compare the finish</strong>
      </div>

      <div className="ba-card">
        <div
          className="ba"
          ref={sliderRef}
          style={{ '--ba-position': `${position}%` }}
          onPointerDown={startDrag}
          onPointerMove={(event) => {
            if (event.buttons === 1) updatePosition(event.clientX);
          }}
        >
          <img src={afterImage} alt={`${title} after`} className="ba-img" draggable="false" />
          <div className="ba-before">
            <img src={beforeImage} alt={`${title} before`} className="ba-img" draggable="false" />
          </div>
          <span className="ba-tag ba-tag--before">Before</span>
          <span className="ba-tag ba-tag--after">After</span>
          <span className="ba-handle" aria-hidden="true" />
          <input
            className="ba-range"
            type="range"
            min="8"
            max="92"
            value={Math.round(position)}
            onChange={(event) => setPosition(Number(event.target.value))}
            aria-label="Compare before and after painting result"
          />
        </div>
      </div>

      <div className="ba-caption ba-caption--below">
        <div>
          <strong>{title}</strong>
          <span>{meta}</span>
        </div>
      </div>

      <div className="ba-controls">
        <span>Before</span>
        <span>After</span>
      </div>
    </div>
  );
}
