import { useEffect, useRef, useState } from 'react';

const NUMBERED_SLIDES_TO_CHECK = 12;

const loadImage = (src) => new Promise((resolve) => {
  const image = new Image();
  image.onload = () => resolve(true);
  image.onerror = () => resolve(false);
  image.src = src;
});

export default function BeforeAfterSlider({
  title = 'Exterior repaint — Siaya County Club',
  meta = 'Full prep, caulk, prime & 2 coats · 4 days',
  beforeImage,
  afterImage,
}) {
  const [pos, setPos] = useState(52);
  const [dragging, setDragging] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [slides, setSlides] = useState([{ before: beforeImage, after: afterImage }]);
  const [isVisible, setIsVisible] = useState(false);
  const wrapRef = useRef(null);
  const showcaseRef = useRef(null);

  useEffect(() => {
    const numberedSlides = Array.from({ length: NUMBERED_SLIDES_TO_CHECK }, (_, index) => {
      const number = index + 1;
      return {
        before: `/images/before-${number}.jpeg`,
        after: `/images/after-${number}.jpeg`,
      };
    });

    let cancelled = false;
    Promise.all(numberedSlides.map(async (slide) => (
      (await Promise.all([loadImage(slide.before), loadImage(slide.after)]).then(([before, after]) => before && after))
        ? slide
        : null
    ))).then((foundSlides) => {
      if (!cancelled) setSlides([{ before: beforeImage, after: afterImage }, ...foundSlides.filter(Boolean)]);
    });

    return () => { cancelled = true; };
  }, [beforeImage, afterImage]);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.35 });
    if (showcaseRef.current) observer.observe(showcaseRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || slides.length < 2) return undefined;
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
      setPos(52);
    }, 7000);
    return () => window.clearInterval(timer);
  }, [isVisible, slides.length]);

  const setFromClientX = (clientX) => {
    const rect = wrapRef.current.getBoundingClientRect();
    let pct = ((clientX - rect.left) / rect.width) * 100;
    pct = Math.max(2, Math.min(98, pct));
    setPos(pct);
  };

  const onPointerDown = (event) => {
    setDragging(true);
    wrapRef.current.setPointerCapture(event.pointerId);
    setFromClientX(event.clientX);
  };
  const onPointerMove = (event) => dragging && setFromClientX(event.clientX);
  const onPointerUp = () => setDragging(false);

  const onKeyDown = (event) => {
    let next = pos;
    if (event.key === 'ArrowLeft') next = pos - 4;
    if (event.key === 'ArrowRight') next = pos + 4;
    if (event.key === 'Home') next = 2;
    if (event.key === 'End') next = 98;
    if (next !== pos) {
      event.preventDefault();
      setPos(Math.max(2, Math.min(98, next)));
    }
  };

  const showNext = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
    setPos(52);
  };
  const currentSlide = slides[activeSlide] || slides[0];

  return (
    <div className="ba-wrap" ref={showcaseRef}>
      <div className="ba-showcase-head">
        <span className="eyebrow">See the difference</span>
        <strong>Swipe through our work</strong>
      </div>

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
            <img key={currentSlide.after} src={currentSlide.after} alt={`${title} after`} className="ba-img" />
          </div>
          <div className="ba-layer ba-before">
            <img key={currentSlide.before} src={currentSlide.before} alt={`${title} before`} className="ba-img" />
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
              <span>{meta} · Drag to compare</span>
            </div>
          </div>
        </div>
      </div>

      <div className="ba-controls">
        <span>{slides.length > 1 ? `Project ${activeSlide + 1} of ${slides.length}` : 'Featured project'}</span>
        <button type="button" className="ba-next" onClick={showNext} aria-label="Show next project">
          Next project
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
