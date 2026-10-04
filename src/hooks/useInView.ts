/* ============================================================
   useInView — custom hook for scroll-triggered animations
   Wraps IntersectionObserver to detect when an element enters
   the viewport. Used to trigger stagger fade-up animations.
   ============================================================ */
import { useEffect, useRef, useState } from 'react'

interface UseInViewOptions {
  /** Percentage of element visible before triggering (0–1) */
  threshold?: number
  /** Only fire once — element stays "in view" after first entry */
  once?: boolean
}

export function useInView<T extends Element>(
  options: UseInViewOptions = {},
): [React.RefObject<T | null>, boolean] {
  const { threshold = 0.15, once = true } = options

  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          // Disconnect after first trigger when `once` is true
          if (once) observer.disconnect()
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold },
    )

    observer.observe(element)

    // Cleanup on unmount
    return () => observer.disconnect()
  }, [threshold, once])

  return [ref, inView]
}
