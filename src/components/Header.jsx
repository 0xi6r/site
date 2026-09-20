import { useEffect, useState } from 'react';
import { site } from '../data/site';
import { IconLogo, IconPhone } from './Icons';

const NAV = [
  { href: '#work',     label: 'Our Work' },
  { href: '#services', label: 'Services' },
  { href: '#process',  label: 'Process' },
  { href: '#areas',    label: 'Service Areas' },
  { href: '#faq',      label: 'FAQ' },
];

export default function Header() {
  const [stuck, setStuck]     = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header${stuck ? ' is-stuck' : ''}`} id="header">
      <div className="container header-in">
        <a className="logo" href="#top">
          <span className="logo-mark"><IconLogo /></span>
          <span className="logo-text">
            {site.brandPrimary}
            <em>{site.brandSecondary}</em>
          </span>
        </a>

        <nav className={`nav${navOpen ? ' is-open' : ''}`}>
          {NAV.map(({ href, label }) => (
            <a key={href} href={href} onClick={() => setNavOpen(false)}>{label}</a>
          ))}
          <a className="btn btn-accent nav-cta" href="#estimate" onClick={() => setNavOpen(false)}>
            Get Quote
          </a>
        </nav>

        <div className="header-actions">
          <a className="btn-phone" href={site.phoneHref}>
            <IconPhone /> {site.phone}
          </a>
          <a className="btn btn-accent" href="#estimate">Get Quote</a>
          <button
            className={`burger${navOpen ? ' is-open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={navOpen}
            onClick={() => setNavOpen(o => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}
