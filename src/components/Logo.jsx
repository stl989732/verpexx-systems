export default function Logo({ className = '' }) {
  return (
    <a href="#top" className={`group inline-flex items-center gap-3 ${className}`}>
      <span className="relative block h-10 w-10 overflow-hidden rounded-xl shadow-glow">
        <img
          src="/logo-vpx.jpg"
          alt="Verpexx Systems logo"
          className="absolute left-1/2 top-1/2 h-[175%] w-[175%] max-w-none -translate-x-1/2 -translate-y-1/2 object-cover"
        />
        <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" />
      </span>
      <span className="flex items-baseline gap-1.5 leading-none">
        <span className="text-[17px] font-bold tracking-wideish text-white">
          Verpexx
        </span>
        <span className="font-display italic text-[18px] font-semibold text-brand-500">
          Systems
        </span>
      </span>
    </a>
  )
}
