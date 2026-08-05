'use client'

import { Heart } from 'lucide-react'
import {
  AUTHOR,
  LETTER_PARAGRAPHS,
  NAME,
  SIGNATURE,
} from '@/lib/love-content'
import { useReveal } from '@/hooks/use-reveal'

export function MainLetter() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="carta" ref={ref} className="px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-lg">
        <div className="mb-8 text-center">
          <p className="reveal font-hand text-2xl text-rose">Do fundo do peito</p>
          <h2 className="reveal mt-1 font-display text-5xl text-primary sm:text-6xl">
            A Minha Carta
          </h2>
        </div>

        <article className="reveal paper-texture relative rounded-[1.75rem] border border-rose/20 bg-card p-7 shadow-xl sm:p-10">
          <span className="absolute -top-3 left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-rose text-primary-foreground shadow-md">
            <Heart className="h-4 w-4" fill="currentColor" strokeWidth={0} />
          </span>

          <p className="font-hand text-3xl text-primary">Querida {NAME},</p>

          <div className="mt-4 flex flex-col gap-4">
            {LETTER_PARAGRAPHS.map((p, i) => (
              <p key={i} className="text-pretty leading-relaxed text-foreground/90">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-8 text-right">
            <p className="text-sm text-muted-foreground">{SIGNATURE}</p>
            <p className="font-display text-4xl text-rose">{AUTHOR}</p>
          </div>
        </article>
      </div>
    </section>
  )
}
