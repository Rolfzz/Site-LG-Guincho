import type { Metadata } from 'next'
import { Barlow, Barlow_Condensed } from 'next/font/google'
import './globals.css'
import { brand } from '@/lib/content'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-barlow',
  display: 'swap',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-barlow-condensed',
  display: 'swap',
})

export const metadata: Metadata = {
  title: `${brand.name} – Guincho 24h em Ibaté e Região`,
  description:
    'Atendimento rápido, seguro e confiável para carros, motos, vans e picapes. Acionamento de bateria e táxi emergencial quando você mais precisa.',
  openGraph: {
    title: `${brand.name} – Guincho 24h em Ibaté e Região`,
    description:
      'Atendimento rápido, seguro e confiável para carros, motos, vans e picapes.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <body>{children}</body>
    </html>
  )
}
