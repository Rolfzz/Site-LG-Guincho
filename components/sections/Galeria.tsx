'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { galeria } from '@/lib/content'

export function Galeria() {
  const [idx, setIdx] = useState(0)
  const total = galeria.fotos.length

  function prev() { setIdx((i) => (i - 1 + total) % total) }
  function next() { setIdx((i) => (i + 1) % total) }

  return (
    <section id="galeria" className="bg-canvas py-section">
      <Container>
        <div className="mb-8 text-center">
          <p className="mb-3 font-condensed text-h4 font-bold uppercase tracking-[0.18em] text-accent">
            {galeria.label}
          </p>
          <h2 className="mb-6 font-condensed text-h2-mobile font-extrabold uppercase text-fg-primary md:text-h2">
            {galeria.h2}
          </h2>

          {/* Tipos que podem ser guinchados */}
          <div className="flex flex-wrap justify-center gap-2">
            {galeria.tipos.map((tipo) => (
              <span
                key={tipo}
                className="rounded-full border border-border px-4 py-1.5 font-condensed text-caption font-semibold uppercase tracking-[0.1em] text-fg-secondary"
              >
                {tipo}
              </span>
            ))}
          </div>
        </div>

        {/* Carrossel */}
        <div className="relative mx-auto max-w-3xl">
          <div className="relative aspect-[16/10] overflow-hidden rounded-card">
            <Image
              key={idx}
              src={galeria.fotos[idx].src}
              alt={galeria.fotos[idx].alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority={idx === 0}
            />

            {/* Label sobreposto */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-5 py-4">
              <span className="inline-block rounded-sm bg-accent px-3 py-1 font-condensed text-caption font-bold uppercase tracking-[0.1em] text-fg-on-accent">
                {galeria.fotos[idx].label}
              </span>
            </div>

            {/* Contador */}
            <div className="absolute right-4 top-4 rounded-sm bg-black/60 px-2.5 py-1 text-caption font-semibold text-white">
              {idx + 1} / {total}
            </div>

            {/* Botão anterior */}
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-white transition-colors duration-fast hover:bg-accent hover:text-fg-on-accent"
              aria-label="Foto anterior"
            >
              <ChevronLeft />
            </button>

            {/* Botão próxima */}
            <button
              onClick={next}
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-white transition-colors duration-fast hover:bg-accent hover:text-fg-on-accent"
              aria-label="Próxima foto"
            >
              <ChevronRight />
            </button>
          </div>

          {/* Dots */}
          <div className="mt-4 flex justify-center gap-2">
            {galeria.fotos.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === idx ? 'w-7 bg-accent' : 'w-2 bg-border hover:bg-fg-secondary'
                }`}
                aria-label={`Ver foto ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

function ChevronLeft() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
    </svg>
  )
}

function ChevronRight() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
    </svg>
  )
}
