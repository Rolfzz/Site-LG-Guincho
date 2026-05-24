import { Container } from '@/components/ui/Container'
import { servicos } from '@/lib/content'
import { TruckIcon, BatteryIcon, CarIcon, MotoIcon, VanIcon, WrenchIcon } from '@/components/icons'

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  'guincho-24h': TruckIcon,
  bateria: BatteryIcon,
  'taxi-emergencial': CarIcon,
  motos: MotoIcon,
  'vans-picapes': VanIcon,
  reboque: WrenchIcon,
}

export function Servicos() {
  return (
    <section id="servicos" className="bg-canvas py-section">
      <Container>
        <div className="mb-12 text-center">
          <p className="mb-3 text-h4 font-bold uppercase tracking-[0.18em] text-accent">
            {servicos.label}
          </p>
          <h2 className="font-condensed text-h2-mobile font-extrabold uppercase text-fg-primary md:text-h2">
            {servicos.h2}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {servicos.items.map((item) => {
            const Icon = iconMap[item.id] ?? TruckIcon
            return (
              <div
                key={item.id}
                className="group rounded-card border border-border bg-surface p-6 transition-all duration-base ease-standard hover:border-accent"
              >
                <Icon className="mb-4 h-10 w-10 text-accent" />
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
