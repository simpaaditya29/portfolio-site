// TODO: point this at your real repository URL
const GITHUB_URL = 'https://github.com/your-username/onyx-chess-engine'

const project = {
  name: 'Onyx Chess Engine',
  version: 'v6.0',
  tagline: 'A complete chess training platform — engine, GUI, and analytics in one.',
  description:
    'Onyx is a from-scratch chess engine wrapped in a full training app. v6.0 adds a rich analytics dashboard, flexible training modes, and a standalone desktop build that launches without any setup.',
  highlights: [
    'Custom Python chess engine with move evaluation',
    'Analytics dashboard for tracking games and progress',
    'Multiple training modes for tactics and practice',
    'Standalone desktop build for one-click launch',
  ],
  tags: ['Python', 'Pandas', 'AI', 'GUI', 'Standalone'],
}

const terminalLines = [
  { text: 'onyx analyze --position "1. e4 c5"', dim: true },
  { text: '> eval +0.32 · depth 18', dim: true },
  { text: 'bestmove e2e4', bright: true },
  { text: 'win rate 62% · 4,812 games tracked', dim: true },
  { text: 'accuracy 94.2% ↑', bright: true },
]

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.58.23 2.75.11 3.04.73.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12v3.14c0 .3.21.67.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
          Featured project
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Onyx Chess Engine {project.version}
        </h2>
        <p className="mt-4 text-slate-400">
          Designed, engineered, and shipped end to end. Onyx started as a command-line engine and
          grew into a full chess training platform.
        </p>
      </div>

      <div className="mt-12 grid items-stretch gap-8 lg:grid-cols-2">
        {/* Terminal mockup */}
        <div className="flex flex-col">
          <div className="flex-1 overflow-hidden rounded-xl border border-white/10 bg-slate-900/70 shadow-2xl shadow-black/40">
            <div className="flex items-center gap-2 border-b border-white/10 bg-slate-900 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
              <span className="ml-3 font-mono text-xs text-slate-400">onyx-engine — v6.0</span>
            </div>
            <div className="space-y-2 p-5 font-mono text-sm">
              {terminalLines.map((line, i) => (
                <p key={i} className={line.dim ? 'text-slate-500' : 'text-emerald-300'}>
                  {line.text}
                </p>
              ))}
              <p className="text-slate-500">▌</p>
            </div>
          </div>
        </div>

        {/* Project details */}
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-white">
            {project.name} <span className="text-emerald-400">{project.version}</span>
          </h3>
          <p className="mt-3 text-slate-300">{project.description}</p>

          <ul className="mt-6 space-y-3">
            {project.highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-400">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/25 transition-colors hover:bg-emerald-400"
            >
              <GitHubIcon />
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
