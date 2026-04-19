import { useState } from 'react'

const faqs = [
  {
    q: 'Do I need GoHighLevel to work with Verpexx?',
    a: 'No — but most of our builds sit on top of GoHighLevel because it lets us consolidate CRM, SMS, email, booking, and pipelines in one place. If you already use another stack (HubSpot, Pipedrive, etc.), we can integrate or migrate during onboarding.',
  },
  {
    q: 'How long does setup actually take?',
    a: 'Our flagship AI Automation System ships in 7 days from kickoff. Larger multi-location or AI-voice builds take 2–4 weeks depending on scope. You’ll get a fixed timeline before we start.',
  },
  {
    q: 'What kind of support do you offer after launch?',
    a: 'Every engagement includes 30 days of support so we can tune automations against real lead flow. Premium plans include a 90-day optimization retainer and a dedicated strategist on Slack.',
  },
  {
    q: 'What industries do you work with?',
    a: 'We specialize in cleaning and construction companies — but the same systems work for HVAC, roofing, landscaping, and most service businesses where missed leads = missed revenue.',
  },
  {
    q: 'Can I buy just one service (e.g. only A2P or only the funnel)?',
    a: 'Yes. À la carte engagements are welcome. Book a strategy call and we’ll scope exactly what you need — no upsell pressure.',
  },
  {
    q: 'What does the Free CRM Audit include?',
    a: 'A 30-minute call where we map your current lead flow, identify where leads drop off, and hand you a prioritized list of fixes — whether you work with us or not.',
  },
]

function Item({ q, a, open, onToggle }) {
  return (
    <div
      className={`glass-card !p-0 overflow-hidden transition ${
        open ? 'border-brand-500/30' : ''
      }`}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-8 py-6 text-left"
      >
        <span className="text-lg font-semibold text-white">
          {q}
        </span>
        <span
          className={`grid h-9 w-9 flex-none place-items-center rounded-full border border-white/15 bg-white/5 text-brand-400 transition ${
            open ? 'rotate-45 bg-brand-500/20 border-brand-500/40' : ''
          }`}
        >
          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9 3h2v6h6v2h-6v6H9v-6H3V9h6z" />
          </svg>
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-8 pb-8 text-base text-white/70 leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0)
  return (
    <section id="faq" className="relative section-pad">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">FAQ</span>
          <h2 className="mt-6 text-4xl sm:text-5xl font-bold leading-tight">
            Common <span className="accent-italic">Questions</span>
          </h2>
          <p className="mt-6 text-white/65 lead">
            Everything you want to know before we get on a call.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl gap-4">
          {faqs.map((f, i) => (
            <Item
              key={i}
              q={f.q}
              a={f.a}
              open={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
