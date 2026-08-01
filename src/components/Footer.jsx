export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-slate-500 sm:flex-row">
        <p>© {new Date().getFullYear()} Aaditya Gusai · Built with React + Tailwind CSS</p>
        <p>Python · Pandas · AI Agents</p>
      </div>
    </footer>
  )
}
