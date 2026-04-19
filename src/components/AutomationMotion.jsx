const inputs = [
  { y: 80, label: 'Website Form', icon: 'form' },
  { y: 175, label: 'Missed Call', icon: 'phone' },
  { y: 270, label: 'DM / Chat', icon: 'chat' },
]

const outputs = [
  { y: 80, label: 'Booked Appointment', icon: 'calendar' },
  { y: 175, label: 'CRM Updated', icon: 'db' },
  { y: 270, label: 'Follow-Up Sent', icon: 'send' },
]

function IconPath({ name }) {
  const stroke = 'currentColor'
  switch (name) {
    case 'form':
      return (
        <g fill="none" stroke={stroke} strokeWidth="1.6" strokeLinecap="round">
          <rect x="-9" y="-10" width="18" height="20" rx="2" />
          <path d="M-5-5h10M-5-1h10M-5 3h6" />
        </g>
      )
    case 'phone':
      return (
        <g fill="none" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M-8-8l4-2 3 5-3 2a10 10 0 0 0 7 7l2-3 5 3-2 4a3 3 0 0 1-3 2A18 18 0 0 1-10-5a3 3 0 0 1 2-3z" />
        </g>
      )
    case 'chat':
      return (
        <g fill="none" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M-9-8h18v12H-3l-6 5z" />
          <path d="M-4-2h10M-4 1h6" />
        </g>
      )
    case 'calendar':
      return (
        <g fill="none" stroke={stroke} strokeWidth="1.6" strokeLinecap="round">
          <rect x="-9" y="-8" width="18" height="17" rx="2" />
          <path d="M-9-4h18M-5-10v4M5-10v4" />
          <circle cx="-2" cy="3" r="1.2" fill={stroke} />
        </g>
      )
    case 'db':
      return (
        <g fill="none" stroke={stroke} strokeWidth="1.6">
          <ellipse cx="0" cy="-7" rx="9" ry="3" />
          <path d="M-9-7v14c0 1.7 4 3 9 3s9-1.3 9-3V-7" />
          <path d="M-9 0c0 1.7 4 3 9 3s9-1.3 9-3" />
        </g>
      )
    case 'send':
      return (
        <g fill="none" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M-10-9 10 0l-20 9 4-9z" />
          <path d="M-6 0h10" />
        </g>
      )
    default:
      return null
  }
}

function Node({ x, y, label, icon, side = 'left' }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <circle r="38" fill="rgba(11,15,25,0.9)" stroke="rgba(255,255,255,0.12)" />
      <circle r="38" fill="none" stroke="rgba(249,148,31,0.18)">
        <animate attributeName="r" values="38;46;38" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;0;0.6" dur="3s" repeatCount="indefinite" />
      </circle>
      <g className="text-brand-400" color="#fb9a3c">
        <IconPath name={icon} />
      </g>
      <text
        x={side === 'left' ? -54 : 54}
        y="5"
        textAnchor={side === 'left' ? 'end' : 'start'}
        fill="rgba(255,255,255,0.75)"
        fontSize="13"
        fontWeight="600"
        fontFamily="Inter, sans-serif"
      >
        {label}
      </text>
    </g>
  )
}

function Particle({ path, delay = 0, duration = 2.2, color = '#f9941f' }) {
  return (
    <circle r="3" fill={color} opacity="0">
      <animate
        attributeName="opacity"
        values="0;1;1;0"
        keyTimes="0;0.1;0.9;1"
        dur={`${duration}s`}
        begin={`${delay}s`}
        repeatCount="indefinite"
      />
      <animateMotion
        path={path}
        dur={`${duration}s`}
        begin={`${delay}s`}
        repeatCount="indefinite"
        rotate="auto"
      />
    </circle>
  )
}

export default function AutomationMotion() {
  const hubX = 500
  const hubY = 175
  const leftX = 130
  const rightX = 870

  const inPaths = inputs.map(
    (n) => `M${leftX + 38} ${n.y} C ${leftX + 180} ${n.y}, ${hubX - 180} ${hubY}, ${hubX - 62} ${hubY}`,
  )
  const outPaths = outputs.map(
    (n) => `M${hubX + 62} ${hubY} C ${hubX + 180} ${hubY}, ${rightX - 180} ${n.y}, ${rightX - 38} ${n.y}`,
  )

  return (
    <section className="relative pt-20 pb-20">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400 animate-pulseGlow" />
            See It In Motion
          </span>
          <h2 className="mt-6 text-4xl sm:text-5xl font-bold leading-tight">
            Every Lead. <span className="accent-italic">Automated.</span>
          </h2>
          <p className="lead mt-6 text-white/65">
            Watch how every inbound lead flows through our AI engine and turns
            into a booked, paying job — no human hand needed.
          </p>
        </div>

        <div className="mt-14 glass-card relative overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 bg-grid-faint bg-[size:40px_40px] opacity-25"
          />
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/15 blur-[110px]"
          />

          <div className="relative w-full overflow-x-auto">
            <svg
              viewBox="0 0 1000 350"
              className="w-full min-w-[720px]"
              role="img"
              aria-label="Automated lead flow motion graphic"
            >
              <defs>
                <linearGradient id="pathGrad" x1="0" x2="1">
                  <stop offset="0" stopColor="rgba(249,148,31,0)" />
                  <stop offset="0.3" stopColor="rgba(249,148,31,0.6)" />
                  <stop offset="0.7" stopColor="rgba(249,148,31,0.6)" />
                  <stop offset="1" stopColor="rgba(249,148,31,0)" />
                </linearGradient>
                <radialGradient id="hubGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0" stopColor="#f9941f" stopOpacity="0.9" />
                  <stop offset="0.5" stopColor="#ea7a0b" stopOpacity="0.5" />
                  <stop offset="1" stopColor="#ea7a0b" stopOpacity="0" />
                </radialGradient>
                <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3.5" result="b" />
                  <feMerge>
                    <feMergeNode in="b" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Connection paths */}
              <g opacity="0.55" strokeWidth="1.5" fill="none">
                {inPaths.map((d, i) => (
                  <path
                    key={`ip-${i}`}
                    d={d}
                    stroke="url(#pathGrad)"
                    strokeDasharray="4 6"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      values="0;-20"
                      dur="1.4s"
                      repeatCount="indefinite"
                    />
                  </path>
                ))}
                {outPaths.map((d, i) => (
                  <path
                    key={`op-${i}`}
                    d={d}
                    stroke="url(#pathGrad)"
                    strokeDasharray="4 6"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      values="0;-20"
                      dur="1.4s"
                      repeatCount="indefinite"
                    />
                  </path>
                ))}
              </g>

              {/* Flowing particles: inputs → hub */}
              {inPaths.map((p, i) => (
                <g key={`inP-${i}`} filter="url(#softGlow)">
                  <Particle path={p} duration={2.4} delay={i * 0.35} />
                  <Particle path={p} duration={2.4} delay={i * 0.35 + 1.2} />
                </g>
              ))}
              {/* Flowing particles: hub → outputs */}
              {outPaths.map((p, i) => (
                <g key={`outP-${i}`} filter="url(#softGlow)">
                  <Particle path={p} duration={2.4} delay={i * 0.35 + 0.7} color="#fbbf77" />
                  <Particle path={p} duration={2.4} delay={i * 0.35 + 1.9} color="#fbbf77" />
                </g>
              ))}

              {/* Input nodes */}
              {inputs.map((n, i) => (
                <Node
                  key={`in-${i}`}
                  x={leftX}
                  y={n.y}
                  label={n.label}
                  icon={n.icon}
                  side="left"
                />
              ))}

              {/* Output nodes */}
              {outputs.map((n, i) => (
                <Node
                  key={`out-${i}`}
                  x={rightX}
                  y={n.y}
                  label={n.label}
                  icon={n.icon}
                  side="right"
                />
              ))}

              {/* Central AI Hub */}
              <g transform={`translate(${hubX}, ${hubY})`}>
                <circle r="110" fill="url(#hubGrad)" opacity="0.5" />
                <circle r="62" fill="rgba(11,15,25,0.95)" stroke="rgba(249,148,31,0.6)" strokeWidth="1.5" />
                <circle r="62" fill="none" stroke="rgba(249,148,31,0.35)">
                  <animate attributeName="r" values="62;78;62" dur="2.6s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.7;0;0.7" dur="2.6s" repeatCount="indefinite" />
                </circle>
                <circle r="62" fill="none" stroke="rgba(249,148,31,0.2)">
                  <animate attributeName="r" values="62;92;62" dur="2.6s" begin="0.6s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.5;0;0.5" dur="2.6s" begin="0.6s" repeatCount="indefinite" />
                </circle>

                {/* Hub icon */}
                <g stroke="#f9941f" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="-22" y="-14" width="44" height="28" rx="5" />
                  <circle cx="-10" cy="0" r="2" fill="#f9941f" />
                  <circle cx="10" cy="0" r="2" fill="#f9941f" />
                  <path d="M-6 7h12" />
                  <path d="M0 -14v-8" />
                  <circle cx="0" cy="-24" r="2.5" fill="#f9941f" />
                </g>

                <text
                  y="42"
                  textAnchor="middle"
                  fill="#fff"
                  fontSize="12"
                  fontWeight="700"
                  letterSpacing="0.15em"
                  fontFamily="Inter, sans-serif"
                >
                  VERPEXX AI
                </text>
              </g>
            </svg>
          </div>

          {/* Legend / live ticker */}
          <div className="relative mt-6 grid gap-3 sm:grid-cols-3">
            <TickerStat value="< 2s" label="Response time" />
            <TickerStat value="24/7" label="Always running" />
            <TickerStat value="0" label="Missed leads" />
          </div>
        </div>
      </div>
    </section>
  )
}

function TickerStat({ value, label }) {
  return (
    <div className="flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-ink-800/50 px-4 py-3 backdrop-blur">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-pulseGlow rounded-full bg-brand-500 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-400" />
      </span>
      <span className="font-display text-lg font-bold text-brand-400">
        {value}
      </span>
      <span className="label-sm text-white/55 uppercase tracking-[0.18em]">
        {label}
      </span>
    </div>
  )
}
