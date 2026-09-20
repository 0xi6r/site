import { site } from '../data/site';

export default function MobileBar() {
  return (
    <div className="mobile-bar">
      <a className="btn btn-outline" href={site.phoneHref}>Call Now</a>
      <a className="btn btn-accent" href="#estimate">Free Estimate</a>
    </div>
  );
}