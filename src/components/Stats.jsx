const STATS = [
  { num: '2,400+', lbl: 'Projects completed' },
  { num: '20+',    lbl: 'Years in business' },
  { num: '4.9★',   lbl: '380+ verified reviews' },
  { num: '5 yr',   lbl: 'Workmanship warranty' },
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