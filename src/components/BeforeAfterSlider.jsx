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
  const [frames, setFrames] = useState([
    { src: beforeImage, label: 'Before' },
    { src: afterImage, label: 'After' },
  ]);
  const [activeFrame, setActiveFrame] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const showcaseRef = useRef(null);

  useEffect(() => {
    const numberedPairs = Array.from({ length: NUMBERED_SLIDES_TO_CHECK }, (_, index) => {
      const number = index + 1;
      return {
        before: `/images/before-${number}.jpeg`,
        after: `/images/after-${number}.jpeg`,
      };
    });

    let cancelled = false;
    Promise.all(numberedPairs.map(async (pair) => (
      (await Promise.all([loadImage(pair.before), loadImage(pair.after)]).then(([before, after]) => before && after))
        ? pair
        : null
    ))).then((foundPairs) => {
      if (cancelled) return;
      const numberedFrames = foundPairs.filter(Boolean).flatMap((pair) => [
        { src: pair.before, label: 'Before' },
        { src: pair.after, label: 'After' },
      ]);
      setFrames([
        { src: beforeImage, label: 'Before' },
        { src: afterImage, label: 'After' },
        ...numberedFrames,
      ]);
    });

    return () => { cancelled = true; };
  }, [beforeImage, afterImage]);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.35 });
    if (showcaseRef.current) observer.observe(showcaseRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || frames.length < 2) return undefined;
    const timer = window.setInterval(() => {
      setActiveFrame((current) => (current + 1) % frames.length);
    }, 5500);
    return () => window.clearInterval(timer);
  }, [isVisible, frames.length]);

  const showNext = () => setActiveFrame((current) => (current + 1) % frames.length);
  const currentFrame = frames[activeFrame] || frames[0];

  return (
    <div className="ba-wrap" ref={showcaseRef}>
      <div className="ba-showcase-head">
        <span className="eyebrow">See the difference</span>
        <strong>Recent work, one step at a time</strong>
      </div>

      <div className="ba-card">
        <div className="ba ba-slideshow" aria-live="polite">
          <img key={currentFrame.src} src={currentFrame.src} alt={`${title} ${currentFrame.label.toLowerCase()}`} className="ba-slide-img" />
          <span className={`ba-tag ba-tag--${currentFrame.label.toLowerCase()}`}>{currentFrame.label}</span>
        </div>
      </div>

      <div className="ba-caption ba-caption--below">
        <div>
          <strong>{title}</strong>
          <span>{meta}</span>
        </div>
      </div>

      <div className="ba-controls">
        <span>{currentFrame.label} · Image {activeFrame + 1} of {frames.length}</span>
        <button type="button" className="ba-next" onClick={showNext} aria-label="Show next image">
          Next image
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
