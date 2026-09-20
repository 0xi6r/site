import { useState } from 'react';
import { site } from '../data/site';
import { IconCheck, IconPhone, IconMail, IconClock } from './Icons';

export default function Estimate() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) { e.currentTarget.reportValidity(); return; }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setTimeout(() => setSent(false), 3200);
      e.target.reset();
    }, 900);
  };

  return (
    <section className="section estimate" id="estimate">
      <div className="container estimate-grid">
        <div>
          <span className="eyebrow">Free estimate</span>
          <h2 style={{ marginTop: '.8rem' }}>Get your written quote in 24 hours</h2>
          <p className="estimate-lead">
            Tell us about your project and we'll schedule a free on-site visit.
            No pressure, no pushy sales — just an honest, itemized number.
          </p>

          <ul className="estimate-points">
            <li><IconCheck /> Free on-site measurement &amp; surface inspection</li>
            <li><IconCheck /> Written, itemized quote — no hidden fees</li>
            <li><IconCheck /> Licensed, insured, background-checked crews</li>
            <li><IconCheck /> 5-year workmanship warranty on every job</li>
          </ul>

          <div className="estimate-contact">
            <a href={site.phoneHref}><IconPhone /> {site.phone}</a>
            <a href={site.emailHref}><IconMail /> {site.email}</a>
            <a href="#"><IconClock /> {site.hours}</a>
          </div>
        </div>

        <div className="form-card">
          <h3>Request your free estimate</h3>
          <p>Takes about 60 seconds. We'll call you within one business day.</p>

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="field">
                <label htmlFor="name">Full name <span className="req">*</span></label>
                <input id="name" name="name" type="text" placeholder="Jane Doe" required />
              </div>
              <div className="field">
                <label htmlFor="phone">Phone <span className="req">*</span></label>
                <input id="phone" name="phone" type="tel" placeholder="+254 700 000 000" required />
              </div>
            </div>

            <div className="field">
              <label htmlFor="email">Email address <span className="req">*</span></label>
              <input id="email" name="email" type="email" placeholder="jane@example.com" required />
            </div>

            <div className="field">
              <label htmlFor="address">Property address / city</label>
              <input id="address" name="address" type="text" placeholder="123 Main St, Nairobi" />
            </div>

            <div className="form-row">
              <div className="field">
                <label htmlFor="service">Service needed <span className="req">*</span></label>
                <select id="service" name="service" required defaultValue="">
                  <option value="" disabled>Select a service…</option>
                  <option>Interior painting</option>
                  <option>Exterior painting</option>
                  <option>Commercial painting</option>
                  <option>Cabinet refinishing</option>
                  <option>Drywall repair &amp; prep</option>
                  <option>Deck / fence staining</option>
                  <option>Not sure yet</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="timeline">Timeline</label>
                <select id="timeline" name="timeline" defaultValue="">
                  <option value="" disabled>Select…</option>
                  <option>ASAP</option>
                  <option>Within 2 weeks</option>
                  <option>Within 1–2 months</option>
                  <option>Just getting quotes</option>
                </select>
              </div>
            </div>

            <div className="field">
              <label htmlFor="details">Project details</label>
              <textarea
                id="details"
                name="details"
                placeholder="e.g. 3 bedrooms, hallway and stairwell. Some drywall cracks in the hallway ceiling."
              />
            </div>

            <label className="form-consent">
              <input type="checkbox" required />
              <span>I agree to be contacted about my estimate request. We never share your information.</span>
            </label>

            <button
              className="btn btn-accent btn-lg"
              type="submit"
              disabled={sending}
              style={sent ? { background: '#1B7A46', boxShadow: 'none' } : undefined}
            >
              {sent ? "✓ Request Sent — We'll Call You Soon"
               : sending ? 'Sending…'
               : 'Request My Free Estimate'}
            </button>
            <p className="form-note">🔒 Your information is safe. No spam, ever.</p>
          </form>
        </div>
      </div>
    </section>
  );
}