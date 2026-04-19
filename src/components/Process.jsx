const steps = [
  {
    n: '01',
    title: 'Audit',
    body: 'We map your lead flow, find the leaks, and show you exactly where revenue is slipping through the cracks.',
  },
  {
    n: '02',
    title: 'Build',
    body: 'We build your CRM, AI auto-replies, booking flow, and follow-up sequences — tailored to your services.',
  },
  {
    n: '03',
    title: 'Optimize',
    body: 'We test every trigger, tune the copy, and fine-tune conversion so every lead gets the best possible response.',
  },
  {
    n: '04',
    title: 'Scale',
    body: 'With a system that closes for you, we plug in new channels and help you scale ad spend and output confidently.',
  },
]

export default function Process() {
  return (
    <section id="process" className="relative section-pad">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">How It Works</span>
          <h2 className="mt-6 text-4xl sm:text-5xl font-bold leading-tight">
            A Simple <span className="accent-italic">4-Step</span> System
          </h2>
          <p className="lead mt-6 text-white/65">
            From audit to scale — no jargon, no handoffs, no guesswork.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="glass-card card-lift relative overflow-hidden"
            >
              <div className="font-display text-6xl font-bold text-brand-500/30">
                {s.n}
              </div>
              <h3 className="mt-4 text-2xl font-bold">{s.title}</h3>
              <p className="mt-3 text-base text-white/60 leading-relaxed">{s.body}</p>
              <div
                aria-hidden
                className="absolute -right-14 -bottom-14 h-32 w-32 rounded-full bg-brand-500/5 blur-3xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
