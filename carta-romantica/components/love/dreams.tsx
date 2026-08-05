'use client'

import { Sparkles } from 'lucide-react'
import { DREAMS } from '@/lib/love-content'
import { useReveal } from '@/hooks/use-reveal'

export function Dreams() {
  const ref = useReveal<HTMLElement>()

  return (
    <section
      id="sonhos"
      ref={ref}
      className="bg-secondary/40 px-6 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-md">
        <div className="text-center">
          <p className="reveal font-hand text-2xl text-rose">O que ainda vem</p>
          <h2 className="reveal mt-1 font-display text-5xl text-primary sm:text-6xl">
            Nossos Sonhos
          </h2>
          <p className="reveal mt-3 text-sm text-muted-foreground">
            Planos que eu quero construir com você.
          </p>
        </div>

        <div className="reveal mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {DREAMS.map((dream, i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-2xl border border-lilac/30 bg-card p-5 shadow-sm"
            >
              <Sparkles
                className="mt-0.5 h-5 w-5 shrink-0 text-lilac"
                strokeWidth={2}
              />
              <p className="text-pretty text-sm leading-relaxed text-foreground/90">
                {dream}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
