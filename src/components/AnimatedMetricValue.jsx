import { useCountUp } from '../hooks/useCountUp.js'

function PercentValue({ end, active }) {
  const v = useCountUp(end, active)
  return <>{v}%</>
}

function RatioValue({ left, right, active }) {
  const a = useCountUp(left, active)
  const b = useCountUp(right, active)
  return (
    <>
      {a}/{b}
    </>
  )
}

function DaysValue({ end, active }) {
  const v = useCountUp(end, active)
  return (
    <>
      {v} Days
    </>
  )
}

function MultValue({ end, active }) {
  const v = useCountUp(end, active)
  return (
    <>
      {v}×
    </>
  )
}

/**
 * Renders a hero / results style stat with count-up from zero when `active`.
 * `metric.kind`: 'percent' | 'ratio' | 'days' | 'mult'
 */
export function AnimatedMetricValue({ metric, active }) {
  switch (metric.kind) {
    case 'percent':
      return <PercentValue end={metric.end} active={active} />
    case 'ratio':
      return <RatioValue left={metric.left} right={metric.right} active={active} />
    case 'days':
      return <DaysValue end={metric.end} active={active} />
    case 'mult':
      return <MultValue end={metric.end} active={active} />
    default:
      return null
  }
}
