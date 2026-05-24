import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { footer, brand } from '@/lib/content'

export function Footer() {
  return (
    <footer className="border-t border-border bg-canvas py-12">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          {/* Marca */}
          <div className="max-w-xs">
            <div className="mb-3 flex items-center gap-3">
              <Image
                src="/logo.jpg"
                alt="LG Guincho"
                width={40}
                height={40}
                className="h-10 w-auto rounded-sm object-contain"
              />
              <p className="font-condensed text-[22px] font-extrabold uppercase tracking-wide text-accent">
                {brand.name}
              </p>
            </div>
            <p className="text-caption text-fg-secondary">{footer.slogan}</p>
            <p className="mt-2 text-caption text-fg-secondary/60">{footer.location}</p>
          </div>

          {/* Nav */}
          <nav aria-label="Links do rodapé">
            <p className="mb-3 text-h4 font-bold uppercase tracking-[0.14em] text-accent">Menu</p>
            <ul className="flex flex-col gap-2">
              {footer.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-caption text-fg-secondary transition-colors duration-fast hover:text-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contato */}
          <div>
            <p className="mb-3 text-h4 font-bold uppercase tracking-[0.14em] text-accent">Contato</p>
            <a
              href={footer.contato.whatsappHref}
              className="block text-caption text-fg-secondary transition-colors duration-fast hover:text-accent"
            >
              {footer.contato.whatsapp}
            </a>
            <p className="mt-1 text-caption text-fg-secondary/60">Ibaté – SP e Região</p>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center">
          <p className="text-caption text-fg-secondary/40">
            © {new Date().getFullYear()} {brand.name} — {footer.location}
          </p>
        </div>
      </Container>
    </footer>
  )
}
