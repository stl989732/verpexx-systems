const metrics = [
  { value: '90%', label: 'Faster response time' },
  { value: '35%', label: 'More booked appointments' },
  { value: '24/7', label: 'Lead availability' },
  { value: '7 Days', label: 'From kickoff to launch' },
]

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 -z-10">
        <video
          className="h-full w-full object-cover"
          src="/VideoAutomation.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        />
        {/* Dark tint so video feels brand-native */}
        <div className="absolute inset-0 bg-ink-950/70" />
        {/* Soft orange wash (brand color blends into video) */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-700/15 via-transparent to-brand-500/10 mix-blend-overlay" />
        {/* Top + bottom fade into page — the "blend" */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink-900 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-ink-900 via-ink-900/80 to-transparent" />
        {/* Left + right vignette for text legibility */}
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-ink-900/80 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-ink-900/80 to-transparent" />
        {/* Subtle glow pulses */}
        <div className="absolute left-1/2 top-0 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-brand-500/10 blur-[140px] animate-pulseGlow" />
      </div>

      <div className="container-x pt-32 pb-20">
        <div className="mx-auto max-w-5xl text-center">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400 animate-pulseGlow" />
            AI Automation · Cleaning & Construction
          </span>

          <h1 className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-bold leading-none text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)]">
            We Automate Your Business
            <br />
            <span className="accent-italic">So You Can Scale</span> Without
            <br className="hidden sm:block" />
            {' '}Hiring More Staff
          </h1>

          <p className="lead mx-auto mt-8 max-w-2xl text-white/80 drop-shadow-[0_2px_20px_rgba(0,0,0,0.6)]">
            We eliminate missed leads by automating your follow-ups, booking,
            and pipeline — so cleaning and construction companies close more
            jobs without hiring.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="btn-primary w-full sm:w-auto">
              Book a Free Strategy Call
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M7.5 4.5 13 10l-5.5 5.5-1.4-1.4L10.2 10 6.1 5.9z" />
              </svg>
            </a>
            <a href="#services" className="btn-ghost w-full sm:w-auto">
              Explore Services
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 label-sm text-white/60">
            <span className="flex -space-x-1.5">
              {['#f9941f', '#fbbf77', '#c15f09'].map((c, i) => (
                <span
                  key={i}
                  className="h-5 w-5 rounded-full border-2 border-ink-900"
                  style={{ background: c }}
                />
              ))}
            </span>
            <span>Trusted by service businesses scaling past 6 & 7 figures</span>
          </div>
        </div>

        {/* Metrics strip */}
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="glass-card !p-0 grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {metrics.map((m) => (
              <div key={m.label} className="p-8 text-center">
                <div className="font-display text-4xl font-bold text-brand-500">
                  {m.value}
                </div>
                <div className="mt-2 label-sm text-white/60 tracking-wideish">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
