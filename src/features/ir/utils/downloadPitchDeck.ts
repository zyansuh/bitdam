import type { IrSnapshot } from '../types/ir'

export function downloadPitchDeck(snapshot: IrSnapshot) {
  const lines = [
    '빚담 Pitch Deck (데모 집계본)',
    '',
    ...snapshot.kpis.map((item) => `${item.label}: ${item.value} — ${item.note}`),
    '',
    '매출 구성',
    ...snapshot.mix.map((item) => `${item.label}: ${item.percent}%`),
    '',
    `TAM ${snapshot.market.tam.toLocaleString()}원`,
    `SAM ${snapshot.market.sam.toLocaleString()}원`,
    `SOM ${snapshot.market.som.toLocaleString()}원`,
    '',
    '산출 근거',
    ...snapshot.sources,
  ]
  const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'bitdam-ir-pitch-deck.txt'
  link.click()
  URL.revokeObjectURL(url)
}
