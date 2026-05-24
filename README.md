# LG Guincho — Site

Landing page gerada pelo [HELIX](https://github.com/guiramostsx/helix-cli) a partir da referência `rufinoautosocorro.com.br`.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Estrutura

```
app/
  layout.tsx        # Font Baloo Chettan 2 + metadata
  page.tsx          # Composição das seções
  globals.css       # Tokens CSS + Tailwind base
components/
  ui/               # Button, Container, FloatWhatsApp
  sections/         # Nav, Hero, SobreNos, Servicos, Diferenciais, CTACentral, Contato, Footer
  icons/            # SVG icons — monolinear
lib/
  content.ts        # Todo o conteúdo editável (textos, telefones, links)
tailwind.config.ts  # Design tokens do HELIX
```

## Como personalizar

- **Textos e contato:** edite `lib/content.ts`
- **Cores e fontes:** edite `tailwind.config.ts`
- **Foto do hero:** substitua `/public/hero-bg.jpg`

## Deploy

- **Vercel:** suba o repositório no GitHub e importe em [vercel.com](https://vercel.com)
- **Netlify:** `npm run build` → deploy da pasta `.next`
- **Cloudflare Pages:** configure build command `npm run build`
