import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { sobreNos } from '@/lib/content'

export function SobreNos() {
  return (
    <section id="sobre" className="bg-surface py-section">
      <Container>
        <div className="flex flex-col items-center gap-12 md:flex-row">
          {/* Imagem */}
          <div className="relative w-full flex-1 overflow-hidden rounded-card">
            <div className="relative aspect-[4/3] w-full md:aspect-[3/4] md:h-[420px]">
              <Image
                src="/guincho-jeep.jpg"
                alt="Guincho de SUV — LG Guincho Ibaté e Região"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 rounded-card ring-1 ring-inset ring-border" />
            </div>
          </div>

          {/* Texto */}
          <div className="flex-1">
            <p className="mb-3 text-h4 font-bold uppercase tracking-[0.18em] text-accent">
              {sobreNos.label}
            </p>
            <h2 className="mb-6 font-condensed text-h2-mobile font-extrabold uppercase text-fg-primary md:text-h2">
              {sobreNos.h2}
            </h2>
            {sobreNos.body.map((p, i) => (
              <p key={i} className="mb-4 text-body text-fg-secondary last:mb-0">
                {p}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
