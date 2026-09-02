import type { PolicyChapter } from '../types/policy'

interface PolicyTocProps {
  chapters: PolicyChapter[]
}

export default function PolicyToc({ chapters }: PolicyTocProps) {
  return (
    <nav className="policy-toc" aria-label="운영정책 목차">
      {chapters.map((chapter) => (
        <a key={chapter.id} href={`#${chapter.id}`} className="policy-toc__link">
          {chapter.number} {chapter.title}
        </a>
      ))}
      <a href="#business" className="policy-toc__link">
        사업자 정보
      </a>
    </nav>
  )
}
