import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [sent, setSent] = useState(false)

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`New inquiry from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\n\n${form.message}`,
    )
    window.location.href = `mailto:info@vps.verpexxsystems.dev?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="relative section-pad">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Contact</span>
          <h2 className="mt-6 text-4xl sm:text-5xl font-bold leading-tight">
            Let's <span className="accent-italic">Automate</span> Your Pipeline
          </h2>
          <p className="lead mt-6 text-white/65">
            Book a free strategy call or send us a message — we reply within one
            business day.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          <div className="glass-card lg:col-span-2">
            <h3 className="text-2xl font-bold">Send us a message</h3>
            <p className="mt-2 label-sm text-white/55">
              Tell us about your business and what’s broken in your pipeline.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <Field
                  label="Email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <Field
                label="Company"
                name="company"
                value={form.company}
                onChange={handleChange}
              />
              <div>
                <label className="label-sm font-bold uppercase tracking-[0.18em] text-white/55">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-ink-800/70 px-4 py-3 text-base text-white placeholder:text-white/30 outline-none transition focus:border-brand-500/60 focus:bg-ink-800"
                  placeholder="What's broken in your lead flow?"
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                {sent ? 'Opening your email…' : 'Send Message'}
              </button>
              <div className="text-center label-sm text-white/45">
                or email{' '}
                <a
                  href="mailto:info@vps.verpexxsystems.dev"
                  className="text-brand-400 hover:text-brand-300"
                >
                  info@vps.verpexxsystems.dev
                </a>
              </div>
            </form>
          </div>

          <div className="glass-card !p-0 overflow-hidden lg:col-span-3">
            <div className="flex items-center justify-between border-b border-white/10 px-8 py-5">
              <div>
                <div className="label-sm font-bold uppercase tracking-[0.18em] text-brand-400">
                  Free Strategy Call
                </div>
                <div className="mt-1 text-lg font-bold">
                  Pick a time that works for you
                </div>
              </div>
              <span className="hidden sm:inline-flex rounded-full bg-brand-500/15 px-3 py-1 label-sm font-bold text-brand-300">
                30 min · No pitch
              </span>
            </div>
            <div className="relative" style={{ minHeight: 640 }}>
              <iframe
                title="Book a Strategy Call"
                src="https://scale.verpexxsystems.dev/widget/booking/yq5JvNHaOufcD6NGnV2t"
                className="h-[640px] w-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, ...props }) {
  return (
    <div>
      <label className="label-sm font-bold uppercase tracking-[0.18em] text-white/55">
        {label}
      </label>
      <input
        {...props}
        className="mt-2 w-full rounded-xl border border-white/10 bg-ink-800/70 px-4 py-3 text-base text-white placeholder:text-white/30 outline-none transition focus:border-brand-500/60 focus:bg-ink-800"
      />
    </div>
  )
}
