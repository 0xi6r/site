import { IconShield, IconClock, IconCheck, IconBuilding } from './Icons';

export default function TrustStrip() {
  return (
    <div className="trust">
      <div className="container">
        <ul className="trust-in">
          <li><IconShield /> Fully licensed &amp; insured</li>
          <li><IconClock /> On-time, on-budget</li>
          <li><IconCheck /> 5-year workmanship warranty</li>
          <li><IconBuilding /> Residential &amp; commercial</li>
        </ul>
      </div>
    </div>
  );
}
