'use client'

import { useState } from 'react'
import { ACROSTIC, NAME } from '@/lib/love-content'
import { useReveal } from '@/hooks/use-reveal'

export function Acrostic() {
  const ref = useReveal<HTMLElement>()
  const [active, setActive] = useState(0)

  return (
    <section id="acrostico" ref={ref} className="px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-md text-center">
        <p className="reveal font-hand text-2xl text-rose">O seu nome diz tudo</p>
        <h2 className="reveal mt-1 font-display text-5xl text-primary sm:text-6xl">
          {NAME}
        </h2>
        <p className="reveal mt-3 text-sm text-muted-foreground">
          Toque em cada letra para revelar um segredo.
        </p>

        <div className="reveal mt-10 flex flex-col gap-3">
          {ACROSTIC.map((item, i) => {
            const isActive = active === i
            return (
              <button
                key={item.letter}
                type="button"
                onClick={() => setActive(i)}
                aria-expanded={isActive}
                className={`group flex items-center gap-4 rounded-2xl border p-3 text-left transition-all duration-300 active:scale-[0.98] ${
                  isActive
                    ? 'border-rose/40 bg-card shadow-md'
                    : 'border-border bg-card/50'
                }`}
              >
                <span
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl font-display text-4xl transition-colors ${
                    isActive
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-primary'
                  }`}
                >
                  {item.letter}
                </span>
                <span className="min-w-0">
                  <span className="block font-semibold text-primary">
                    {item.word}
                  </span>
                  <span
                    className={`block text-pretty text-sm text-muted-foreground transition-all duration-300 ${
                      isActive
                        ? 'mt-0.5 max-h-24 opacity-100'
                        : 'max-h-0 overflow-hidden opacity-0'
                    }`}
                  >
                    {item.text}
                  </span>
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
