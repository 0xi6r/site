const STATS = [
  { num: '2010', lbl: 'Founded & registered' },
  { num: '6',    lbl: 'Core finish services' },
  { num: 'Kenya', lbl: 'Projects countrywide' },
];

export default function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {STATS.map((s) => (
            <div className="stat" key={s.lbl}>
              <div className="num">{s.num}</div>
              <div className="lbl">{s.lbl}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
