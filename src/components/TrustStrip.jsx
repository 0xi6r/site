import { IconShield, IconClock, IconCheck, IconBuilding } from './Icons';

export default function TrustStrip() {
  return (
    <div className="trust">
      <div className="container">
        <ul className="trust-in">
          <li><IconShield /> Registered since 2010</li>
          <li><IconClock /> Professional advice before execution</li>
          <li><IconCheck /> Quality, integrity &amp; accountability</li>
          <li><IconBuilding /> Residential, commercial &amp; institutional</li>
        </ul>
      </div>
    </div>
  );
}
