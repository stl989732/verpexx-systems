const plans = [
  {
    name: 'Basic',
    tag: 'Starter systems',
    who: 'Solo operators & small crews doing <$20k/mo who are missing calls and losing leads.',
    features: [
      'GHL workspace setup',
      'Missed-call SMS auto-reply',
      'Single booking calendar',
      'Basic lead capture form',
      '30-day support',
    ],
    roi: 'Recover just 2 missed jobs/month and this pays for itself.',
    price: 'Contact for pricing',
  },
  {
    name: 'Startup',
    tag: 'Most popular',
    featured: true,
    who: 'Growing cleaning & construction businesses ($20k–$80k/mo) ready to systemize follow-ups and booking.',
    features: [
      'Everything in Basic',
      'AI-powered SMS + email sequences',
      'Pipeline automation (lead → job)',
      'A2P registration & compliance',
      'Review request automation',
      'Reporting dashboard',
    ],
    roi: 'Typical clients see 20–35% more booked jobs within 60 days.',
    price: 'Contact for pricing',
  },
  {
    name: 'Premium',
    tag: 'Full AI stack',
    who: 'Established operators ($80k+/mo) ready to scale with AI agents and multi-location pipelines.',
    features: [
      'Everything in Startup',
      'AI voice + chat lead qualifier',
      'Multi-location pipeline routing',
      'Paid ads → booking integrations',
      'Dedicated strategist',
      '90-day optimization retainer',
    ],
    roi: 'Built to 3× revenue in 90 days and free up 60% of admin time.',
    price: 'Contact for pricing',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative section-pad">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Pricing</span>
          <h2 className="mt-6 text-4xl sm:text-5xl font-bold leading-tight">
            Simple, Transparent <span className="accent-italic">Pricing</span>
          </h2>
          <p className="lead mt-6 text-white/65">
            Priced on outcomes, not hours. Every plan is built to pay for itself
            in booked jobs.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`glass-card card-lift relative flex flex-col ${
                p.featured
                  ? 'ring-2 ring-brand-500/60 lg:scale-[1.02]'
                  : ''
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-500 px-3 py-1 label-sm font-bold uppercase tracking-wider text-ink-950">
                  {p.tag}
                </span>
              )}
              <div className="flex items-baseline justify-between">
                <h3 className="text-3xl font-bold">{p.name}</h3>
                {!p.featured && (
                  <span className="label-sm font-semibold uppercase tracking-wider text-white/45">
                    {p.tag}
                  </span>
                )}
              </div>

              <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="label-sm font-bold uppercase tracking-[0.18em] text-brand-400">
                  Who this is for
                </div>
                <p className="mt-2 text-base text-white/70 leading-relaxed">
                  {p.who}
                </p>
              </div>

              <ul className="mt-6 space-y-3">
                {p.features.map((f, i) => (
                  <li key={i} className="flex gap-3 text-base text-white/80">
                    <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-brand-500/15 text-brand-400">
                      <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                        <path d="m7.6 13.2-3.3-3.3 1.4-1.4 1.9 1.9 6-6 1.4 1.4z" />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t border-white/10 pt-6">
                <div className="label-sm font-bold uppercase tracking-[0.18em] text-white/50">
                  ROI
                </div>
                <p className="mt-2 text-base text-white/70 leading-relaxed">
                  {p.roi}
                </p>
              </div>

              <div className="mt-6 pt-2">
                <div className="text-white/55 label-sm uppercase tracking-[0.2em]">
                  Investment
                </div>
                <div className="mt-1 font-display text-3xl font-bold text-white">
                  {p.price}
                </div>
                <a
                  href="#contact"
                  className={`mt-6 w-full ${p.featured ? 'btn-primary' : 'btn-ghost'}`}
                >
                  {p.featured ? 'Book Strategy Call' : 'Request Pricing'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
