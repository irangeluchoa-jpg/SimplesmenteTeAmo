'use client'

import { Heart } from 'lucide-react'
import { TIMELINE } from '@/lib/love-content'
import { useReveal } from '@/hooks/use-reveal'

export function Timeline() {
  const ref = useReveal<HTMLElement>()

  return (
    <section
      id="timeline"
      ref={ref}
      className="bg-secondary/40 px-6 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-md">
        <div className="text-center">
          <p className="reveal font-hand text-2xl text-rose">A nossa história</p>
          <h2 className="reveal mt-1 font-display text-5xl text-primary sm:text-6xl">
            Linha do Tempo
          </h2>
        </div>

        <ol className="relative mt-12 border-l-2 border-dashed border-rose/40 pl-8">
          {TIMELINE.map((item, i) => (
            <li key={i} className="reveal relative mb-9 last:mb-0">
              <span className="absolute -left-[41px] flex h-6 w-6 items-center justify-center rounded-full bg-primary ring-4 ring-secondary/40">
                <Heart
                  className="h-3 w-3 text-primary-foreground"
                  fill="currentColor"
                  strokeWidth={0}
                />
              </span>
              <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
                <span className="text-xs font-semibold uppercase tracking-widest text-rose">
                  {item.date}
                </span>
                <h3 className="mt-1 font-semibold text-primary">{item.title}</h3>
                <p className="mt-1 text-pretty text-sm text-muted-foreground">
                  {item.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
