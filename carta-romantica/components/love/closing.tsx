'use client'

import { Heart } from 'lucide-react'
import { AUTHOR, NAME } from '@/lib/love-content'
import { useReveal } from '@/hooks/use-reveal'
import { spreadLove } from './floating-hearts'

export function Closing() {
  const ref = useReveal<HTMLElement>()
  const year = new Date().getFullYear()

  return (
    <footer
      ref={ref}
      className="relative overflow-hidden bg-primary px-6 py-24 text-center text-primary-foreground"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-full bg-rose/40 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-md">
        <p className="reveal font-hand text-2xl text-rose/90">
          E é só o começo...
        </p>
        <h2 className="reveal mt-2 font-display text-5xl leading-tight text-balance sm:text-6xl">
          Eu te amo, {NAME}
        </h2>
        <p className="reveal mx-auto mt-4 max-w-xs text-pretty text-sm text-primary-foreground/80">
          Obrigado por ser o meu lugar favorito. Aqui vai um abraço bem
          apertado, do jeitinho que você gosta.
        </p>

        <button
          type="button"
          onClick={() => spreadLove(40)}
          className="reveal mt-8 inline-flex items-center gap-2 rounded-full bg-primary-foreground px-8 py-3.5 text-sm font-semibold text-primary shadow-lg transition active:scale-95"
        >
          <Heart className="h-4 w-4" fill="currentColor" strokeWidth={0} />
          Enviar um Abraço
        </button>

        <p className="reveal mt-12 text-xs uppercase tracking-[0.25em] text-primary-foreground/60">
          Com amor · {AUTHOR} · {year}
        </p>
      </div>
    </footer>
  )
}
