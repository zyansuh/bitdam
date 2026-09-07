import type { LearnTone } from '../types/learn'
import { LEARN_TONE_COPY } from '../data/learnToneCopy'

interface LearnToneNoteProps {
  tone: LearnTone
}

export default function LearnToneNote({ tone }: LearnToneNoteProps) {
  const copy = LEARN_TONE_COPY[tone]
  return (
    <aside className="learn-tone">
      <p className="learn-tone__label">{copy.label}</p>
      <p>{copy.body}</p>
    </aside>
  )
}
