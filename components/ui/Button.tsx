type ButtonVariant = 'primary' | 'outline-light' | 'outline-dark' | 'whatsapp'

interface ButtonProps {
  variant?: ButtonVariant
  href?: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export function Button({ variant = 'primary', href, children, className = '', onClick }: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 font-bold text-btn uppercase tracking-[0.06em] rounded-button px-7 py-3.5 min-h-[48px] transition-all duration-fast ease-standard'

  const variants: Record<ButtonVariant, string> = {
    primary: 'bg-accent text-fg-on-accent hover:bg-accent-hover',
    'outline-light': 'bg-transparent border-2 border-white text-white hover:border-accent hover:text-accent',
    'outline-dark': 'bg-transparent border-2 border-fg-on-accent text-fg-on-accent hover:bg-fg-on-accent/10',
    whatsapp: 'bg-brand-whatsapp text-white hover:bg-brand-whatsapp-hover',
  }

  const cls = `${base} ${variants[variant]} ${className}`

  if (href) {
    return <a href={href} className={cls} onClick={onClick}>{children}</a>
  }

  return <button className={cls} onClick={onClick}>{children}</button>
}
