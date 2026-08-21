const skills = [
  {
    name: 'Python',
    emoji: '🐍',
    description:
      'My core language — from quick scripts to full applications. Onyx’s engine and training logic are written in Python.',
    points: ['Clean, testable code', 'Automation & tooling'],
  },
  {
    name: 'Pandas',
    emoji: '🐼',
    description:
      'Wrangling data into insight. I use DataFrames to analyze games, model player performance, and power analytics dashboards.',
    points: ['Data analysis & cleaning', 'Performance tracking'],
  },
  {
    name: 'AI Agents',
    emoji: '🤖',
    description:
      'Designing autonomous agents that reason, plan, and act. Onyx’s self-improving training loop is built around agentic behavior.',
    points: ['Agent design & orchestration', 'Tool-use & automation'],
  },
  {
    name: 'SQL',
    emoji: '🗄️',
    description: 'Writing complex queries to extract, manipulate, and manage data for analytical dashboards and reporting.',
    points: ['Database Management', 'Data Extraction'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="border-t border-white/10 bg-slate-900/40">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
            Skills
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What I work with
          </h2>
          <p className="mt-4 text-slate-400">
            The tools I reach for to turn ideas into working software.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {skills.map((skill) => (
            <article
              key={skill.name}
              className="group rounded-xl border border-white/10 bg-slate-900/60 p-6 transition-colors hover:border-emerald-500/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/5 text-2xl">
                <span role="img" aria-label={skill.name}>
                  {skill.emoji}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">{skill.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{skill.description}</p>
              <ul className="mt-4 space-y-2">
                {skill.points.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="text-emerald-400">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
