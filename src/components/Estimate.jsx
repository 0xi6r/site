import { useState } from 'react';
import { site } from '../data/site';
import { IconCheck, IconPhone, IconMail, IconClock, IconWhatsApp } from './Icons';

export default function Estimate() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) { e.currentTarget.reportValidity(); return; }
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const subject = encodeURIComponent(`Project quote request from ${data.name}`);
    const body = encodeURIComponent([
      'New ICEARK project quote request',
      '',
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email}`,
      `Preferred contact: ${data.contactMethod}`,
      `Address / city: ${data.address || 'Not provided'}`,
      `Service: ${data.service}`,
      `Timeline: ${data.timeline || 'Not provided'}`,
      '',
      'Project details:',
      data.details || 'Not provided',
    ].join('\n'));

    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      window.location.href = `${site.emailHref}?subject=${subject}&body=${body}`;
      setTimeout(() => setSent(false), 3200);
      form.reset();
    }, 900);
  };

  return (
    <section className="section estimate" id="estimate">
      <div className="container estimate-grid">
        <div>
          <span className="eyebrow">Get quote</span>
          <h2 style={{ marginTop: '.8rem' }}>Request a project quote</h2>
          <p className="estimate-lead">
            Tell us what you need done and we'll review the scope, advise on the right finish,
            and prepare a practical quote for your project.
          </p>

          <ul className="estimate-points">
            <li><IconCheck /> Share the space, service needed, site condition, and timeline.</li>
            <li><IconCheck /> Send photos or drawings on WhatsApp for a faster first review.</li>
            <li><IconCheck /> We confirm scope, preparation needs, schedule, and quote details.</li>
          </ul>

          <div className="estimate-contact">
            <a href={site.phoneHref}><IconPhone /> {site.phone}</a>
            <a href={site.altPhoneHref}><IconPhone /> {site.altPhone}</a>
            <a href={site.whatsappHref} target="_blank" rel="noreferrer"><IconWhatsApp /> Chat on WhatsApp</a>
            <a href={site.emailHref}><IconMail /> {site.email}</a>
            <a href="#"><IconClock /> {site.hours}</a>
          </div>
        </div>

        <div className="form-card">
          <h3>Request a quote</h3>
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
              <label htmlFor="contactMethod">Preferred contact <span className="req">*</span></label>
              <select id="contactMethod" name="contactMethod" required defaultValue="WhatsApp">
                <option>WhatsApp</option>
                <option>Phone call</option>
                <option>Email</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="address">Property address / city</label>
                <input id="address" name="address" type="text" placeholder="Kisumu, Nairobi, or project location" />
            </div>

            <div className="form-row">
              <div className="field">
                <label htmlFor="service">Service needed <span className="req">*</span></label>
                <select id="service" name="service" required defaultValue="">
                  <option value="" disabled>Select a service…</option>
                  <option>Painting &amp; decoration</option>
                  <option>Special effects application</option>
                  <option>Epoxy flooring</option>
                  <option>Glazing</option>
                  <option>Gypsum works</option>
                  <option>Tiling &amp; fittings</option>
                  <option>Multiple services</option>
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
                placeholder="e.g. office repaint and gypsum ceiling, residential epoxy flooring, tiling and fittings, or full interior finish works."
              />
            </div>

            <label className="form-consent">
              <input name="consent" type="checkbox" required />
              <span>I agree to be contacted about my quote request. We never share your information.</span>
            </label>

            <button
              className="btn btn-accent btn-lg"
              type="submit"
              disabled={sending}
              style={sent ? { background: '#1B7A46', boxShadow: 'none' } : undefined}
            >
              {sent ? "✓ Request Sent — We'll Call You Soon"
               : sending ? 'Sending…'
               : 'Request My Quote'}
            </button>
            <p className="form-status" aria-live="polite">
              {sent ? 'Your email app should open with the request filled in.' : ''}
            </p>
            <p className="form-note">Your information is safe. No spam, ever.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
