'use client'

import { useEffect, useState } from 'react'
import { Mail, X } from 'lucide-react'
import { OPEN_WHEN } from '@/lib/love-content'
import { useReveal } from '@/hooks/use-reveal'
import { spreadLove } from './floating-hearts'

export function OpenWhen() {
  const ref = useReveal<HTMLElement>()
  const [open, setOpen] = useState<number | null>(null)

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const active = open !== null ? OPEN_WHEN[open] : null

  return (
    <section
      id="abra-quando"
      ref={ref}
      className="bg-secondary/40 px-6 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-md">
        <div className="text-center">
          <p className="reveal font-hand text-2xl text-rose">Guardei para você</p>
          <h2 className="reveal mt-1 font-display text-5xl text-primary sm:text-6xl">
            Abra Quando...
          </h2>
        </div>

        <div className="reveal mt-10 flex flex-col gap-4">
          {OPEN_WHEN.map((env, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                setOpen(i)
                spreadLove(12)
              }}
              className="group flex items-center gap-4 rounded-2xl border-2 border-dashed border-rose/40 bg-card p-5 text-left shadow-sm transition active:scale-[0.98]"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-rose/15 text-rose transition group-hover:-translate-y-0.5">
                <Mail className="h-6 w-6" strokeWidth={2} />
              </span>
              <span className="font-semibold text-primary">{env.label}</span>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.label}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-primary/60 p-6 backdrop-blur-sm"
          onClick={() => setOpen(null)}
        >
          <div
            className="relative w-full max-w-sm rounded-3xl border border-rose/20 bg-card p-8 text-center shadow-2xl"
            style={{ animation: 'fade-rise 0.4s ease-out forwards' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(null)}
              aria-label="Fechar"
              className="absolute right-4 top-4 text-muted-foreground transition hover:text-primary"
            >
              <X className="h-5 w-5" />
            </button>
            <Mail className="mx-auto h-8 w-8 text-rose" strokeWidth={2} />
            <p className="mt-3 font-hand text-2xl text-primary">{active.label}</p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              {active.message}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
