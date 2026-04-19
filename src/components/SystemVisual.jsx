const flow = [
  { label: 'Lead', sub: 'Form / Ad / DM' },
  { label: 'Auto Reply', sub: 'AI responds in seconds' },
  { label: 'Booking', sub: 'Appointment confirmed' },
  { label: 'Closed Deal', sub: 'Paid job, every time' },
]

export default function SystemVisual() {
  return (
    <section className="relative pt-20 pb-20">
      <div className="container-x">
        <div className="glass-card relative overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 bg-grid-faint bg-[size:40px_40px] opacity-30"
          />
          <div className="relative">
            <div className="text-center">
              <span className="eyebrow">The Verpexx Pipeline</span>
              <h3 className="mt-6 text-3xl sm:text-4xl font-bold">
                Lead → Auto Reply → Booking →{' '}
                <span className="accent-italic">Closed Deal</span>
              </h3>
              <p className="mt-4 text-white/60 max-w-xl mx-auto text-base">
                Every system we build plugs into this simple flow. No leaks. No
                lag. No missed revenue.
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {flow.map((f, i) => (
                <div key={i} className="relative">
                  <div className="rounded-2xl border border-white/10 bg-ink-800/60 p-8 text-center backdrop-blur">
                    <div className="mx-auto grid h-10 w-10 place-items-center rounded-full border border-brand-500/40 bg-brand-500/10 text-brand-400 font-bold">
                      {i + 1}
                    </div>
                    <div className="mt-4 text-xl font-bold text-white">
                      {f.label}
                    </div>
                    <div className="mt-2 label-sm text-white/55">{f.sub}</div>
                  </div>
                  {i < flow.length - 1 && (
                    <svg
                      className="hidden lg:block absolute top-1/2 -right-3 h-5 w-5 -translate-y-1/2 text-brand-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M7.5 4.5 13 10l-5.5 5.5-1.4-1.4L10.2 10 6.1 5.9z" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
