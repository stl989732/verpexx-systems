const stats = [
  { value: '90%', label: 'Faster response time', sub: 'Reply in seconds, not hours' },
  { value: '35%', label: 'More bookings', sub: 'From the same ad spend' },
  { value: '3×', label: 'Revenue growth', sub: 'Within 90 days of launch' },
  { value: '60%', label: 'Time saved', sub: 'On admin, follow-up & quoting' },
]

export default function Results() {
  return (
    <section id="results" className="relative section-pad">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Real Outcomes</span>
          <h2 className="mt-6 text-4xl sm:text-5xl font-bold leading-tight">
            The <span className="accent-italic">Impact</span> You Can Expect
          </h2>
          <p className="lead mt-6 text-white/65">
            Not vanity metrics — the numbers that actually move your P&L.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="glass-card card-lift relative overflow-hidden text-center"
            >
              <div className="font-display text-5xl sm:text-6xl font-bold text-brand-500">
                {s.value}
              </div>
              <div className="mt-4 text-base font-semibold text-white">
                {s.label}
              </div>
              <div className="mt-1 label-sm text-white/55">{s.sub}</div>
              <div
                aria-hidden
                className="absolute -top-10 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-brand-500/10 blur-3xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
