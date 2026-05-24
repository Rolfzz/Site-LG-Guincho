import { Container } from '@/components/ui/Container'

const itens = [
  { num: '24h', label: 'Atendimento ininterrupto' },
  { num: '100%', label: 'Foco em emergência' },
  { num: 'Ibaté', label: 'e toda a região' },
  { num: 'Pix', label: 'Dinheiro e cartão' },
]

export function Numeros() {
  return (
    <section className="bg-accent py-10" aria-label="Destaques do serviço">
      <Container>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {itens.map((item) => (
            <div key={item.num} className="text-center">
              <p className="font-condensed text-num font-extrabold uppercase leading-none text-fg-on-accent">
                {item.num}
              </p>
              <p className="mt-2 text-caption font-semibold uppercase tracking-widest text-fg-on-accent/70">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
