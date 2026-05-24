import { readFileSync, writeFileSync, cpSync, rmSync, existsSync } from 'fs'
import { globSync } from 'fs'

const BASE = '/Site-LG-Guincho'

// Fix image paths that are missing basePath (next/image with unoptimized:true bypasses basePath)
function fixImagePaths(htmlPath) {
  let html = readFileSync(htmlPath, 'utf8')

  // src="/image.jpg" → src="/Site-LG-Guincho/image.jpg"
  html = html.replace(
    /\bsrc="\/(?!Site-LG-Guincho)([\w-]+\.(?:jpg|jpeg|png|webp|svg|gif|ico))"/g,
    `src="${BASE}/$1"`
  )
  // href="/image.jpg" (preload hints) → href="/Site-LG-Guincho/image.jpg"
  html = html.replace(
    /\bhref="\/(?!Site-LG-Guincho)([\w-]+\.(?:jpg|jpeg|png|webp|svg|gif|ico))"/g,
    `href="${BASE}/$1"`
  )
  // url('/image.jpg') in inline styles → url('/Site-LG-Guincho/image.jpg')
  html = html.replace(
    /url\('\/(?!Site-LG-Guincho)([\w-]+\.(?:jpg|jpeg|png|webp|svg|gif|ico))'\)/g,
    `url('${BASE}/$1')`
  )

  writeFileSync(htmlPath, html)
}

fixImagePaths('out/index.html')
fixImagePaths('out/404.html')
console.log('✓ Caminhos de imagem corrigidos para GitHub Pages')

if (existsSync('docs')) rmSync('docs', { recursive: true })
cpSync('out', 'docs', { recursive: true })
console.log('✓ out/ copiado para docs/ — pronto para GitHub Pages')
