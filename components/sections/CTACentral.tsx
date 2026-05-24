import { Container } from '@/components/ui/Container'
import { ctaCentral, brand } from '@/lib/content'

export function CTACentral() {
  return (
    <section className="bg-accent py-section">
      <Container className="text-center">
        <h2 className="mb-6 font-condensed text-h2-mobile font-extrabold uppercase text-fg-on-accent md:text-h2">
          {ctaCentral.h2}
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-body text-fg-on-accent/80">
          {ctaCentral.body}
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={brand.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-button bg-fg-on-accent px-8 py-4 text-[16px] font-bold uppercase tracking-[0.06em] text-accent transition-colors duration-fast hover:bg-fg-on-accent/90"
          >
            {ctaCentral.cta.label}
          </a>
          <a
            href={brand.phoneHref}
            className="inline-flex items-center justify-center rounded-button border-2 border-fg-on-accent px-8 py-4 text-[16px] font-bold uppercase tracking-[0.06em] text-fg-on-accent transition-colors duration-fast hover:bg-fg-on-accent/10"
          >
            {brand.phone}
          </a>
        </div>
      </Container>
    </section>
  )
}
