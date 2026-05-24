import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { galeria } from '@/lib/content'

export function Galeria() {
  return (
    <section id="galeria" className="bg-canvas py-section">
      <Container>
        <div className="mb-12 text-center">
          <p className="mb-3 text-h4 font-bold uppercase tracking-[0.18em] text-accent">
            {galeria.label}
          </p>
          <h2 className="mb-4 font-condensed text-h2-mobile font-extrabold uppercase text-fg-primary md:text-h2">
            {galeria.h2}
          </h2>
          <p className="mx-auto max-w-2xl text-body text-fg-secondary">{galeria.body}</p>
        </div>

        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
          {galeria.fotos.map((foto, i) => (
            <div
              key={foto.src}
              className={`group relative aspect-[4/3] overflow-hidden rounded-card${
                i === 0 ? ' col-span-2 row-span-2 aspect-square' : ''
              }`}
            >
              <Image
                src={foto.src}
                alt={foto.alt}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                sizes={
                  i === 0
                    ? '(max-width: 1024px) 100vw, 50vw'
                    : '(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw'
                }
              />
              <div className="absolute inset-0 bg-gradient-to-t from-canvas/80 via-canvas/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 translate-y-2 p-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="inline-block rounded-sm bg-accent px-2.5 py-1 text-caption font-bold uppercase tracking-[0.12em] text-fg-on-accent">
                  {foto.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
