const STEPS = [
  { title: 'On-site quote',  text: 'We visit, measure, inspect the surfaces, and give you a written, itemized quote — usually within 24 hours.' },
  { title: 'Prep & protect',         text: 'Furniture covered, floors masked, cracks filled, surfaces sanded and primed. This is where quality is decided.' },
  { title: 'Paint & finish',         text: 'Premium paints applied by our own crew — never subcontracted. Daily cleanup so your space stays livable.' },
  { title: 'Walkthrough & warranty', text: 'We inspect every wall with you, touch up anything you flag, and hand over a 5-year workmanship warranty.' },
];

export default function Process() {
  return (
    <section className="section" id="process">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow">How it works</span>
          <h2 style={{ marginTop: '.8rem' }}>Four steps, zero surprises</h2>
          <p>A clear process from the first phone call to the final walkthrough.</p>
        </div>

        <div className="process-grid">
          {STEPS.map((s) => (
            <div className="step" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
