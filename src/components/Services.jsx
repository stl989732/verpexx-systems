const services = [
  {
    title: 'GHL Setup & CRM',
    outcome: 'A central hub that captures every lead and never lets one slip.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="4" width="18" height="16" rx="3" />
        <path d="M3 9h18M8 14h3M8 17h6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Automated Follow-Ups That Turn Missed Leads Into Booked Jobs',
    outcome: 'SMS + email sequences that respond in seconds, 24/7.',
    featured: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 5h16v11H8l-4 4z" strokeLinejoin="round" />
        <path d="M9 10h6M9 13h4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'A2P Registration',
    outcome: 'Get compliant and start sending SMS legally in days — not weeks.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z" strokeLinejoin="round" />
        <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Funnels & Website',
    outcome: 'High-converting pages built to turn traffic into booked calls.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 5h18l-6 8v5l-6 2v-7z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'AI Systems',
    outcome: 'AI agents that qualify leads and book appointments while you sleep.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="4" y="7" width="16" height="12" rx="2" />
        <path d="M12 3v4M8 11h.01M16 11h.01M9 15h6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Pipeline & Reporting',
    outcome: 'See exactly where revenue is — and where it’s leaking out.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 19V5M4 19h16" strokeLinecap="round" />
        <path d="M8 15V9M12 15v-4M16 15v-8" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="services" className="relative section-pad">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Services</span>
          <h2 className="mt-6 text-4xl sm:text-5xl font-bold leading-tight">
            Services That <span className="accent-italic">Drive Results</span>
          </h2>
          <p className="lead mt-6 text-white/65">
            Respond in seconds. Close more jobs. Every system we build is tied to
            one outcome — booked revenue.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={i}
              className={`glass-card card-lift group relative overflow-hidden flex flex-col items-center text-center ${
                s.featured ? 'ring-1 ring-brand-500/40' : ''
              }`}
            >
              {s.featured && (
                <span className="absolute right-4 top-4 rounded-full bg-brand-500/15 px-2.5 py-1 label-sm font-bold uppercase tracking-wider text-brand-300">
                  Most Requested
                </span>
              )}
              <div
                className={`grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/5 text-brand-400 transition group-hover:bg-brand-500/10 group-hover:text-brand-300 group-hover:border-brand-500/30`}
              >
                {s.icon}
              </div>
              <h3 className="mt-6 text-xl font-bold leading-snug text-white">
                {s.title}
              </h3>
              <p className="mt-3 text-base text-white/60 leading-relaxed">
                {s.outcome}
              </p>
              <div className="mt-6 flex items-center justify-center gap-1.5 label-sm font-semibold text-brand-400 opacity-70 transition group-hover:opacity-100">
                Learn more
                <svg className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M7.5 4.5 13 10l-5.5 5.5-1.4-1.4L10.2 10 6.1 5.9z" />
                </svg>
              </div>
              <div
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-brand-500/10 blur-3xl opacity-0 transition group-hover:opacity-100"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
