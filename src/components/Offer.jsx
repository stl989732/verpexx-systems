const deliverables = [
  'Full GHL workspace setup & branded dashboard',
  'AI-powered missed-call & SMS auto-reply',
  'Lead → Booking pipeline automations',
  'Booking calendar + reminders + no-show recovery',
  'Review-request automation to build social proof',
  'Reporting dashboard so you see revenue, not noise',
]

export default function Offer() {
  return (
    <section className="relative section-pad">
      <div className="container-x">
        <div className="relative mx-auto max-w-5xl">
          <div
            aria-hidden
            className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-brand-500/30 via-transparent to-brand-700/20 blur-2xl"
          />
          <div className="glass-card relative overflow-hidden !p-10 sm:!p-12 lg:!p-16">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="eyebrow">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                  The Flagship Offer
                </span>
                <h2 className="mt-6 text-4xl sm:text-5xl font-bold leading-tight">
                  AI <span className="accent-italic">Automation</span> System
                  <br />
                  in <span className="accent-italic">7 Days</span>
                </h2>
                <p className="lead mt-6 text-white/70">
                  A productized, done-for-you automation stack built around your
                  service business. Kickoff Monday — live and booking leads by
                  the following Monday.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <a href="#contact" className="btn-primary btn-sm">
                    Claim Your Free CRM Audit
                  </a>
                  <a href="#pricing" className="btn-ghost btn-sm">
                    See Pricing
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-6 label-sm text-white/55">
                  <span className="flex items-center gap-1.5">
                    <svg className="h-4 w-4 text-brand-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="m7.6 13.2-3.3-3.3 1.4-1.4 1.9 1.9 6-6 1.4 1.4z" />
                    </svg>
                    No long-term contracts
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="h-4 w-4 text-brand-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="m7.6 13.2-3.3-3.3 1.4-1.4 1.9 1.9 6-6 1.4 1.4z" />
                    </svg>
                    Delivery guarantee
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="h-4 w-4 text-brand-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="m7.6 13.2-3.3-3.3 1.4-1.4 1.9 1.9 6-6 1.4 1.4z" />
                    </svg>
                    30-day support included
                  </span>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-ink-800/60 p-8 backdrop-blur">
                <div className="flex items-center justify-between">
                  <div className="label-sm font-semibold uppercase tracking-[0.2em] text-white/50">
                    What's Included
                  </div>
                  <div className="rounded-full bg-brand-500/15 px-3 py-1 label-sm font-bold uppercase tracking-wider text-brand-300">
                    7-Day Sprint
                  </div>
                </div>
                <ul className="mt-6 space-y-4">
                  {deliverables.map((d, i) => (
                    <li key={i} className="flex gap-3 text-base text-white/80">
                      <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-brand-500/15 text-brand-400">
                        <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path d="m7.6 13.2-3.3-3.3 1.4-1.4 1.9 1.9 6-6 1.4 1.4z" />
                        </svg>
                      </span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
