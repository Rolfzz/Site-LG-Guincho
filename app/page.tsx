import { Nav } from '@/components/sections/Nav'
import { Hero } from '@/components/sections/Hero'
import { Numeros } from '@/components/sections/Numeros'
import { Servicos } from '@/components/sections/Servicos'
import { Galeria } from '@/components/sections/Galeria'
import { SobreNos } from '@/components/sections/SobreNos'
import { Diferenciais } from '@/components/sections/Diferenciais'
import { CTACentral } from '@/components/sections/CTACentral'
import { Contato } from '@/components/sections/Contato'
import { Footer } from '@/components/sections/Footer'
import { FloatWhatsApp } from '@/components/ui/FloatWhatsApp'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Numeros />
      <Servicos />
      <Galeria />
      <SobreNos />
      <Diferenciais />
      <CTACentral />
      <Contato />
      <Footer />
      <FloatWhatsApp />
    </main>
  )
}
