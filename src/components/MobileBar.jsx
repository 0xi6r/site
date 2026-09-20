import { site } from '../data/site';

export default function MobileBar() {
  return (
    <div className="mobile-bar">
      <a className="btn btn-outline" href={site.phoneHref}>Call</a>
      <a className="btn btn-whatsapp" href={site.whatsappHref} target="_blank" rel="noreferrer">WhatsApp</a>
      <a className="btn btn-accent" href="#estimate">Get Quote</a>
    </div>
  );
}
