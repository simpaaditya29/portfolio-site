const skills = ['Python', 'Pandas', 'AI Agents']

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pb-16 pt-28"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium tracking-wide text-emerald-300">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Available for new projects
        </span>

        <h1 className="mt-8 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
            Aaditya Gusai
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg text-slate-400 sm:text-xl">
          I build intelligent tools with Python, Pandas, and AI agents — including{' '}
          <a
            href="#projects"
            className="font-medium text-emerald-400 underline-offset-4 hover:underline"
          >
            Onyx Chess Engine
          </a>
          , a self-improving chess trainer.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/25 transition-colors hover:bg-emerald-400"
          >
            View my work
          </a>
          <a
            href="#skills"
            className="rounded-lg border border-slate-700 bg-slate-900/50 px-6 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-slate-500 hover:text-white"
          >
            See my skills
          </a>
        </div>

        {/* Skill pills */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-3 border-t border-white/10 pt-8">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-slate-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
