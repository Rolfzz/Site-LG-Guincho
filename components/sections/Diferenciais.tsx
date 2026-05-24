import { Container } from '@/components/ui/Container'
import { diferenciais } from '@/lib/content'
import { ClockIcon, MoneyIcon, SpeedIcon, StarIcon } from '@/components/icons'

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  'atendimento-24h': ClockIcon,
  'precos-justos': MoneyIcon,
  agilidade: SpeedIcon,
  profissionais: StarIcon,
}

export function Diferenciais() {
  return (
    <section id="diferenciais" className="bg-canvas py-section">
      <Container>
        <div className="mb-12 text-center">
          <p className="mb-3 text-h4 font-bold uppercase tracking-[0.18em] text-accent">
            {diferenciais.label}
          </p>
          <h2 className="font-condensed text-h2-mobile font-extrabold uppercase text-fg-primary md:text-h2">
            {diferenciais.h2}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {diferenciais.items.map((item) => {
            const Icon = iconMap[item.id] ?? ClockIcon
            return (
              <div
                key={item.id}
                className="rounded-card border border-border bg-surface p-6 transition-all duration-base ease-standard hover:border-accent"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-card bg-accent/10">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-2 font-condensed text-h3 font-bold uppercase text-fg-primary">
                  {item.titulo}
                </h3>
                <p className="text-caption text-fg-secondary">{item.descricao}</p>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
