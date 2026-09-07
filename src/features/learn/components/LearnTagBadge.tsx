import type { LearnTagId } from '../types/learn'
import { getLearnTag } from '../data/learnTags'

interface LearnTagBadgeProps {
  tag: LearnTagId
}

export default function LearnTagBadge({ tag }: LearnTagBadgeProps) {
  const item = getLearnTag(tag)
  if (!item) return null
  return <span className="learn-tag">{item.label}</span>
}
