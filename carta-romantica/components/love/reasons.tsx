'use client'

import { Quote } from 'lucide-react'
import { REASONS } from '@/lib/love-content'
import { useReveal } from '@/hooks/use-reveal'

export function Reasons() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="razoes" ref={ref} className="px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-md">
        <div className="text-center">
          <p className="reveal font-hand text-2xl text-rose">Só alguns motivos</p>
          <h2 className="reveal mt-1 font-display text-5xl text-primary sm:text-6xl">
            Por que eu te amo
          </h2>
          <p className="reveal mt-3 text-sm text-muted-foreground">
            Arraste para o lado para ver mais.
          </p>
        </div>

        <div className="reveal mt-10">
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {REASONS.map((reason, i) => (
              <article
                key={i}
                className="relative flex min-h-44 w-64 shrink-0 snap-center flex-col justify-between rounded-3xl border border-rose/20 bg-card p-6 shadow-sm"
              >
                <Quote
                  className="h-7 w-7 text-rose/60"
                  fill="currentColor"
                  strokeWidth={0}
                />
                <p className="text-pretty font-hand text-2xl leading-tight text-primary">
                  {reason}
                </p>
                <span className="mt-4 font-display text-3xl text-rose/50">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
