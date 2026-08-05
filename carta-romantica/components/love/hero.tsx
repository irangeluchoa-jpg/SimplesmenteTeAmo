'use client'

import { useEffect, useState } from 'react'
import { ChevronDown, Heart } from 'lucide-react'
import { NAME, RELATIONSHIP_START } from '@/lib/love-content'
import { spreadLove } from './floating-hearts'

type Elapsed = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getElapsed(): Elapsed {
  const diff = Math.max(0, Date.now() - RELATIONSHIP_START.getTime())
  const seconds = Math.floor(diff / 1000)
  return {
    days: Math.floor(seconds / 86400),
    hours: Math.floor((seconds % 86400) / 3600),
    minutes: Math.floor((seconds % 3600) / 60),
    seconds: seconds % 60,
  }
}

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex min-w-[64px] flex-col items-center rounded-2xl border border-white/40 bg-white/15 px-3 py-3 backdrop-blur-sm sm:min-w-[80px] sm:px-4">
      <span className="font-sans text-2xl font-semibold tabular-nums text-primary-foreground sm:text-4xl">
        {String(value).padStart(2, '0')}
      </span>
      <span className="mt-1 text-[10px] uppercase tracking-widest text-primary-foreground/80 sm:text-xs">
        {label}
      </span>
    </div>
  )
}

export function Hero() {
  const [elapsed, setElapsed] = useState<Elapsed | null>(null)

  useEffect(() => {
    // Atualiza imediatamente e depois a cada segundo.
    // Como getElapsed() sempre recalcula a partir de Date.now(),
    // o contador nunca "trava": mesmo que o timer atrase (aba em
    // segundo plano, dispositivo dormindo, etc.), o próximo tick
    // sempre mostra o valor real e correto — incluindo a virada do dia.
    const tick = () => setElapsed(getElapsed())
    tick()
    const id = setInterval(tick, 1000)

    // Quando o usuário volta pra aba (ex: depois de horas/dias fora),
    // recalcula na hora, sem esperar o próximo tick do interval.
    const handleVisibility = () => {
      if (document.visibilityState === 'visible') tick()
    }
    document.addEventListener('visibilitychange', handleVisibility)
    window.addEventListener('focus', tick)

    return () => {
      clearInterval(id)
      document.removeEventListener('visibilitychange', handleVisibility)
      window.removeEventListener('focus', tick)
    }
  }, [])

  return (
    <header className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-primary px-6 py-16 text-center text-primary-foreground">
      {/* soft glow accents */}
      <div className="pointer-events-none absolute -left-16 top-10 h-56 w-56 rounded-full bg-rose/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-24 h-64 w-64 rounded-full bg-lilac/30 blur-3xl" />

      <div className="relative z-10 flex flex-col items-center">
        <button
          type="button"
          onClick={() => spreadLove(20)}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] backdrop-blur-sm transition active:scale-95"
        >
          <Heart className="h-3.5 w-3.5 animate-soft-pulse" fill="currentColor" strokeWidth={0} />
          Para {NAME}
        </button>

        <p className="font-hand text-xl text-primary-foreground/90 sm:text-2xl">
          Tudo o que eu queria te dizer
        </p>
        <h1 className="mt-1 font-display text-6xl leading-none text-balance sm:text-8xl">
          Carta para o<br />
          Meu Amor
        </h1>

        <p className="mt-6 max-w-md text-pretty text-sm text-primary-foreground/80 sm:text-base">
          Uma carta digital, feita à mão e com o coração, para celebrar cada
          segundo ao seu lado.
        </p>

        {/* countdown */}
        <div className="mt-10">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-primary-foreground/70">
            Juntos há
          </p>
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <Unit value={elapsed?.days ?? 0} label="Dias" />
            <Unit value={elapsed?.hours ?? 0} label="Horas" />
            <Unit value={elapsed?.minutes ?? 0} label="Min" />
            <Unit value={elapsed?.seconds ?? 0} label="Seg" />
          </div>
        </div>

        <a
          href="#acrostico"
          className="mt-12 inline-flex items-center gap-2 rounded-full bg-primary-foreground px-7 py-3 text-sm font-semibold text-primary shadow-lg transition active:scale-95"
        >
          Começar a Ler
          <ChevronDown className="h-4 w-4" />
        </a>
      </div>

      <ChevronDown className="absolute bottom-6 left-1/2 h-6 w-6 -translate-x-1/2 animate-bounce text-primary-foreground/60" />
    </header>
  )
}
