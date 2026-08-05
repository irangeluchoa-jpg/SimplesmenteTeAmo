'use client'

import { useState } from 'react'
import { Gift, Heart } from 'lucide-react'
import { COUPONS } from '@/lib/love-content'
import { useReveal } from '@/hooks/use-reveal'

export function Coupons() {
  const ref = useReveal<HTMLElement>()
  const [redeemed, setRedeemed] = useState<number[]>([])

  const toggle = (i: number) =>
    setRedeemed((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i],
    )

  return (
    <section
      id="vales"
      ref={ref}
      className="bg-primary px-6 py-20 text-primary-foreground sm:py-24"
    >
      <div className="mx-auto max-w-md">
        <div className="text-center">
          <p className="reveal font-hand text-2xl text-rose/90">
            Presentinhos pra resgatar quando quiser
          </p>
          <h2 className="reveal mt-1 font-display text-5xl sm:text-6xl">
            Vales de Amor
          </h2>
        </div>

        <ul className="reveal mt-10 flex flex-col gap-4">
          {COUPONS.map((coupon, i) => {
            const isRedeemed = redeemed.includes(i)
            return (
              <li key={i}>
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-pressed={isRedeemed}
                  className={`group flex w-full items-center gap-4 rounded-2xl border border-dashed border-white/30 bg-white/10 p-4 text-left backdrop-blur-sm transition hover:bg-white/15 active:scale-[0.99] ${
                    isRedeemed ? 'opacity-70' : ''
                  }`}
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-rose">
                    {isRedeemed ? (
                      <Heart className="h-5 w-5" fill="currentColor" strokeWidth={0} />
                    ) : (
                      <Gift className="h-5 w-5" strokeWidth={2.2} />
                    )}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span
                      className={`block text-pretty text-sm font-semibold ${
                        isRedeemed ? 'line-through decoration-rose/70' : ''
                      }`}
                    >
                      {coupon.title}
                    </span>
                    <span className="mt-0.5 block text-pretty font-hand text-lg leading-tight text-rose/90">
                      {coupon.detail}
                    </span>
                  </span>
                  <span className="shrink-0 self-start rounded-full border border-white/25 px-2 py-0.5 text-[10px] uppercase tracking-wide text-primary-foreground/80">
                    {isRedeemed ? 'Resgatado' : 'Toque'}
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
