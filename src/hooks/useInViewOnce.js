import { useEffect, useRef, useState } from 'react'

/**
 * Fires once when the element intersects the viewport (then disconnects).
 */
export function useInViewOnce(options = {}) {
  const { threshold = 0.12, rootMargin = '0px 0px -6% 0px' } = options
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || inView) return
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold, rootMargin }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [inView, threshold, rootMargin])

  return [ref, inView]
}
