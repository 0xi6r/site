const STEPS = [
  { title: 'Site review', text: 'We inspect the space, understand the intended use, and advise on the scope, materials, finish, and execution requirements.' },
  { title: 'Clear proposal', text: 'You get a practical project plan covering preparation, work sequence, safety, timing, and the finish standard expected.' },
  { title: 'Skilled execution', text: 'Our team carries out the work with care for surfaces, materials, equipment, waste handling, and everyone on site.' },
  { title: 'Final handover', text: 'We review the completed work with you, resolve any touch-ups, and leave the space ready for use.' },
];

export default function Process() {
  return (
    <section className="section" id="process">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow">How it works</span>
          <h2 style={{ marginTop: '.8rem' }}>Professional guidance from scope to handover</h2>
          <p>A clear process shaped by ICEARK's values: professionalism, quality, integrity, accountability, and safety.</p>
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
