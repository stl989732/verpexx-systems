import Logo from './Logo.jsx'

const cols = [
  {
    title: 'Company',
    links: [
      { label: 'Services', href: '#services' },
      { label: 'Process', href: '#process' },
      { label: 'Results', href: '#results' },
      { label: 'Pricing', href: '#pricing' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'FAQ', href: '#faq' },
      { label: 'Book a Call', href: '#contact' },
      { label: 'Free CRM Audit', href: '#contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink-950">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs label-sm text-white/55 leading-relaxed">
              AI automation systems for cleaning & construction businesses.
              Respond in seconds. Close more jobs.
            </p>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <div className="label-sm font-bold uppercase tracking-[0.22em] text-white/45">
                {c.title}
              </div>
              <ul className="mt-6 space-y-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-base text-white/70 transition hover:text-brand-400"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="label-sm text-white/45">
            © {new Date().getFullYear()} Verpexx Systems. All rights reserved.
          </p>
          <div className="flex items-center gap-4 label-sm text-white/45">
            <a href="#" className="hover:text-white/70">Privacy</a>
            <a href="#" className="hover:text-white/70">Terms</a>
            <a href="mailto:info@vps.verpexxsystems.dev" className="hover:text-brand-400">
              info@vps.verpexxsystems.dev
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
