import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#0D0D0D',
        surface: '#1A1A1A',
        'surface-2': '#222222',
        accent: '#FFCC00',
        'accent-hover': '#E6B800',
        'fg-primary': '#FFFFFF',
        'fg-secondary': '#9CA3AF',
        'fg-on-accent': '#0D0D0D',
        border: '#2A2A2A',
        'brand-whatsapp': '#25D366',
        'brand-whatsapp-hover': '#20BD5A',
      },
      fontFamily: {
        sans: ['var(--font-barlow)', 'Barlow', 'sans-serif'],
        condensed: ['var(--font-barlow-condensed)', 'Barlow Condensed', 'sans-serif'],
      },
      fontSize: {
        h1: ['64px', { lineHeight: '1.0', letterSpacing: '-0.01em' }],
        'h1-mobile': ['38px', { lineHeight: '1.05', letterSpacing: '0' }],
        h2: ['44px', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'h2-mobile': ['28px', { lineHeight: '1.15', letterSpacing: '0' }],
        h3: ['20px', { lineHeight: '1.35', letterSpacing: '0' }],
        h4: ['12px', { lineHeight: '1.4', letterSpacing: '0.14em' }],
        body: ['17px', { lineHeight: '1.65', letterSpacing: '0' }],
        caption: ['15px', { lineHeight: '1.5', letterSpacing: '0' }],
        btn: ['14px', { lineHeight: '1', letterSpacing: '0.06em' }],
        num: ['52px', { lineHeight: '1', letterSpacing: '-0.02em' }],
      },
      borderRadius: {
        button: '6px',
        card: '8px',
      },
      maxWidth: {
        content: '1200px',
      },
      spacing: {
        section: '80px',
      },
      transitionDuration: {
        fast: '200ms',
        base: '300ms',
        slow: '450ms',
      },
      transitionTimingFunction: {
        standard: 'cubic-bezier(0.4, 0, 0.2, 1)',
        enter: 'cubic-bezier(0, 0, 0.2, 1)',
        exit: 'cubic-bezier(0.4, 0, 1, 1)',
      },
    },
  },
  plugins: [],
}

export default config
