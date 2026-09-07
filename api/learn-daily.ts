interface ServerlessResponse {
  status: (code: number) => { json: (body: unknown) => void }
}

const START = Date.UTC(2026, 0, 1)
const COUNT = 100

export default function handler(_request: unknown, response: ServerlessResponse) {
  const now = new Date()
  const utc = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate())
  const day = Math.floor((utc - START) / 86_400_000)
  const index = ((day % COUNT) + COUNT) % COUNT
  response.status(200).json({
    ok: true,
    index,
    note: '글 DB가 없어 인덱스만 알립니다. 카카오 채널 발송은 별도 서버가 필요합니다.',
  })
}
