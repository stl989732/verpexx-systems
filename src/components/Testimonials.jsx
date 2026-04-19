const testimonials = [
  {
    name: 'Marcus Reid',
    role: 'Owner, Reid Commercial Cleaning',
    company: 'REID CO.',
    quote:
      'We stopped losing leads overnight. The AI replies before my team even sees the notification — and we’ve added roughly 30% more jobs without hiring.',
    result: '+32% booked jobs in 45 days',
    photo:
      'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Jenna Alvarez',
    role: 'Operations Lead, BuildRight Renovations',
    company: 'BUILDRIGHT',
    quote:
      'Verpexx rebuilt our entire intake pipeline. We went from quoting in 2 days to same-day quotes — and our close rate doubled.',
    result: '2× close rate in 60 days',
    photo:
      'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'David Okafor',
    role: 'Founder, Crestline Contracting',
    company: 'CRESTLINE',
    quote:
      'Setup was fast and painless. A week in, the system was booking estimates while I was on site. Best money we’ve spent this year.',
    result: '7-day launch, zero missed leads',
    photo:
      'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
]

const logos = ['REID CO.', 'BUILDRIGHT', 'CRESTLINE', 'NORTHPEAK', 'IRONWORKS', 'CLEANHAUS']

export default function Testimonials() {
  return (
    <section className="relative section-pad">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Clients</span>
          <h2 className="mt-6 text-4xl sm:text-5xl font-bold leading-tight">
            What Our <span className="accent-italic">Clients</span> Say
          </h2>
          <p className="lead mt-6 text-white/65">
            Real operators. Real pipelines. Real revenue.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-70">
          {logos.map((l) => (
            <span
              key={l}
              className="label-sm font-bold tracking-[0.25em] text-white/50"
            >
              {l}
            </span>
          ))}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="glass-card card-lift relative flex flex-col"
            >
              <div className="flex items-center gap-3">
                <img
                  src={t.photo}
                  alt={t.name}
                  loading="lazy"
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-brand-500/30"
                />
                <div>
                  <div className="text-base font-bold text-white">{t.name}</div>
                  <div className="label-sm text-white/55">{t.role}</div>
                </div>
              </div>

              <div className="mt-6 flex gap-1 text-brand-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.2 1 5.8L10 15l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9z" />
                  </svg>
                ))}
              </div>

              <p className="mt-4 text-base text-white/75 leading-relaxed">
                “{t.quote}”
              </p>

              <div className="mt-auto pt-6">
                <div className="divider-line" />
                <div className="mt-4 flex items-center justify-between">
                  <span className="label-sm font-bold tracking-[0.18em] text-white/40">
                    {t.company}
                  </span>
                  <span className="rounded-full bg-brand-500/15 px-3 py-1 label-sm font-bold text-brand-300">
                    {t.result}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
