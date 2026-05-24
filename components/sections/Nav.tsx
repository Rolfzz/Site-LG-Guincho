'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { brand, nav } from '@/lib/content'

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-canvas">
      <Container className="flex h-16 items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2">
          <Image
            src="/logo.jpg"
            alt="LG Guincho"
            width={44}
            height={44}
            className="h-11 w-auto rounded-sm object-contain"
          />
          <span className="font-condensed text-[22px] font-extrabold uppercase tracking-wide text-accent">
            LG Guincho
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Menu principal">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-caption font-medium text-fg-secondary transition-colors duration-fast hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA direita: número + botão */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={brand.phoneHref}
            className="flex items-center gap-2 text-caption font-semibold text-fg-primary transition-colors duration-fast hover:text-accent"
          >
            <PhoneIcon />
            {brand.phone}
          </a>
          <a
            href={brand.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-button bg-accent px-5 py-2.5 text-btn font-bold uppercase tracking-[0.06em] text-fg-on-accent transition-colors duration-fast hover:bg-accent-hover"
          >
            Chamar Agora
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="flex h-11 w-11 items-center justify-center text-fg-primary transition-colors duration-fast hover:text-accent lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </Container>

      {/* Mobile dropdown */}
      {open && (
        <div className="w-full border-t border-border bg-canvas lg:hidden">
          <Container className="flex flex-col py-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-body font-medium text-fg-primary transition-colors duration-fast hover:text-accent"
              >
                {item.label}
              </a>
            ))}
            <a
              href={brand.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-button bg-accent py-3.5 text-btn font-bold uppercase tracking-[0.06em] text-fg-on-accent"
            >
              Chamar Agora — {brand.phone}
            </a>
          </Container>
        </div>
      )}
    </header>
  )
}

function PhoneIcon() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}
