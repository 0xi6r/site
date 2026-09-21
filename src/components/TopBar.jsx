import { site } from '../data/site';
import { IconShield } from './Icons';

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar-in">
        <div className="topbar-right">
          <span>{site.tagline}</span>
          <a href={site.phoneHref}>{site.phone}</a>
          <a href={site.altPhoneHref}>{site.altPhone}</a>
        </div>
      </div>
    </div>
  );
}
