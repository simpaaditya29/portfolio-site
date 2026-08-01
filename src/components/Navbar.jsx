const links = [
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
]

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-lg font-bold tracking-tight text-white">
          AG<span className="text-emerald-400">.</span>
        </a>
        <div className="flex items-center gap-8 text-sm font-medium text-slate-300">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-emerald-400"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
