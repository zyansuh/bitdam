const OPENAI_URL = 'https://api.openai.com/v1/chat/completions'

interface ServerlessRequest {
  method?: string
  body?: unknown
}

interface ServerlessResponse {
  status: (code: number) => {
    json: (body: unknown) => void
    send: (body: string) => void
  }
}

export default async function handler(request: ServerlessRequest, response: ServerlessResponse) {
  const key = (process.env.OPENAI_API_KEY ?? '').trim()
  if (request.method === 'GET') {
    response.status(200).json({ ok: Boolean(key) })
    return
  }
  if (request.method !== 'POST') {
    response.status(405).json({ error: 'method' })
    return
  }
  if (!key) {
    response.status(501).json({ error: 'missing-key' })
    return
  }
  const body = typeof request.body === 'string' ? request.body : JSON.stringify(request.body ?? {})
  const upstream = await fetch(OPENAI_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
    },
    body,
  })
  const text = await upstream.text()
  response.status(upstream.status).send(text)
}
