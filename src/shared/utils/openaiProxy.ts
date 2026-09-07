export async function probeOpenAi(): Promise<boolean> {
  try {
    const response = await fetch('/api/openai', { method: 'GET' })
    if (!response.ok) return false
    const data = (await response.json()) as { ok?: boolean }
    return Boolean(data.ok)
  } catch {
    return false
  }
}

export async function postOpenAiChat(body: unknown): Promise<Response> {
  return fetch('/api/openai', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
}
