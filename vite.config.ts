import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

function bitdamApiPlugin() {
  return {
    name: 'bitdam-api',
    configureServer(server: { middlewares: { use: (fn: (req: import('http').IncomingMessage, res: import('http').ServerResponse, next: () => void) => void) => void } }) {
      server.middlewares.use((req, res, next) => {
        const url = req.url ?? ''
        if (url.startsWith('/api/learn-daily')) {
          const now = new Date()
          const utc = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate())
          const day = Math.floor((utc - Date.UTC(2026, 0, 1)) / 86_400_000)
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ ok: true, index: ((day % 100) + 100) % 100 }))
          return
        }
        if (!url.startsWith('/api/openai')) {
          next()
          return
        }
        const key = (process.env.OPENAI_API_KEY ?? '').trim()
        if (req.method === 'GET') {
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ ok: Boolean(key) }))
          return
        }
        if (req.method !== 'POST') {
          res.statusCode = 405
          res.end()
          return
        }
        if (!key) {
          res.statusCode = 501
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ error: 'missing-key' }))
          return
        }
        const chunks: Buffer[] = []
        req.on('data', (chunk) => chunks.push(Buffer.from(chunk)))
        req.on('end', () => {
          void fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${key}`,
              'Content-Type': 'application/json',
            },
            body: Buffer.concat(chunks).toString('utf8'),
          })
            .then(async (upstream) => {
              res.statusCode = upstream.status
              res.setHeader('Content-Type', 'application/json')
              res.end(await upstream.text())
            })
            .catch(() => {
              res.statusCode = 502
              res.end()
            })
        })
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), bitdamApiPlugin()],
  server: {
    port: 5173,
    strictPort: true,
    proxy: {
      '/kakao-oauth': {
        target: 'https://kauth.kakao.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/kakao-oauth/, ''),
      },
      '/kakao-api': {
        target: 'https://kapi.kakao.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/kakao-api/, ''),
      },
      '/naver-oauth': {
        target: 'https://nid.naver.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/naver-oauth/, ''),
      },
      '/naver-api': {
        target: 'https://openapi.naver.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/naver-api/, ''),
      },
    },
  },
})
