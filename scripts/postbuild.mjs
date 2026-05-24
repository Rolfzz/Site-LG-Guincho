import { cpSync, rmSync, existsSync } from 'fs'

if (existsSync('docs')) rmSync('docs', { recursive: true })
cpSync('out', 'docs', { recursive: true })
console.log('✓ out/ copiado para docs/ — pronto para GitHub Pages')
