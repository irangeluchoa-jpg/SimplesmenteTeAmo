'use client'

import { useEffect, useState } from 'react'
import { Heart } from 'lucide-react'

type FloatingHeart = {
  id: number
  left: number
  size: number
  duration: number
  delay: number
  rotate: number
  hue: 'rose' | 'lilac' | 'primary'
}

const HUES: FloatingHeart['hue'][] = ['rose', 'lilac', 'primary']

export const SPREAD_LOVE_EVENT = 'spread-love'

/** Dispatch this anywhere to shower the screen with hearts. */
export function spreadLove(count = 28) {
  window.dispatchEvent(new CustomEvent(SPREAD_LOVE_EVENT, { detail: { count } }))
}

let counter = 0

export function FloatingHearts() {
  const [hearts, setHearts] = useState<FloatingHeart[]>([])

  useEffect(() => {
    function handle(e: Event) {
      const count = (e as CustomEvent<{ count: number }>).detail?.count ?? 24
      const batch: FloatingHeart[] = Array.from({ length: count }, () => ({
        id: counter++,
        left: Math.random() * 100,
        size: 16 + Math.random() * 28,
        duration: 3.5 + Math.random() * 2.5,
        delay: Math.random() * 0.6,
        rotate: (Math.random() - 0.5) * 90,
        hue: HUES[Math.floor(Math.random() * HUES.length)],
      }))
      setHearts((prev) => [...prev, ...batch])

      const maxLife = 6500
      window.setTimeout(() => {
        setHearts((prev) => prev.filter((h) => !batch.includes(h)))
      }, maxLife)
    }

    window.addEventListener(SPREAD_LOVE_EVENT, handle)
    return () => window.removeEventListener(SPREAD_LOVE_EVENT, handle)
  }, [])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[60] overflow-hidden"
    >
      {hearts.map((h) => (
        <span
          key={h.id}
          className="absolute bottom-0"
          style={{
            left: `${h.left}%`,
            // @ts-expect-error custom props
            '--s': 1,
            '--r': `${h.rotate}deg`,
            animation: `float-up ${h.duration}s ease-in ${h.delay}s forwards`,
          }}
        >
          <Heart
            className={
              h.hue === 'rose'
                ? 'text-rose'
                : h.hue === 'lilac'
                  ? 'text-lilac'
                  : 'text-primary'
            }
            style={{ width: h.size, height: h.size }}
            fill="currentColor"
            strokeWidth={0}
          />
        </span>
      ))}
    </div>
  )
}
