import type { PolicyChapter } from '../types/policy'

interface PolicyTocProps {
  chapters: PolicyChapter[]
  label?: string
  extras?: { id: string; label: string }[]
}

export default function PolicyToc({
  chapters,
  label = '문서 목차',
  extras = [],
}: PolicyTocProps) {
  return (
    <nav className="policy-toc" aria-label={label}>
      {chapters.map((chapter) => (
        <a key={chapter.id} href={`#${chapter.id}`} className="policy-toc__link">
          {chapter.number} {chapter.title}
        </a>
      ))}
      {extras.map((extra) => (
        <a key={extra.id} href={`#${extra.id}`} className="policy-toc__link">
          {extra.label}
        </a>
      ))}
    </nav>
  )
}
