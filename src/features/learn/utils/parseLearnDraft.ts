import type { LearnCategoryId } from '../types/learn'
import { LEARN_CATEGORY_DEFAULTS } from '../data/learnTags'
import { article } from '../data/articleFactory'
import type { LearnDraft } from '../types/learnDraft'
import { slugifyLearnTitle } from './slugifyLearnTitle'
import { todayKey } from './learnDraftStorage'

interface RawDraft {
  title?: string
  lead?: string
  sections?: { heading?: string; paragraphs?: string[] }[]
  takeaways?: string[]
}

function asCategory(value: string): LearnCategoryId {
  const allowed: LearnCategoryId[] = [
    'brew',
    'distill',
    'kinds',
    'names',
    'grain',
    'ferment',
    'distill-deep',
    'oak',
    'world',
  ]
  return allowed.includes(value as LearnCategoryId) ? (value as LearnCategoryId) : 'ferment'
}

export function parseLearnDraftJson(
  raw: string,
  fallbackTitle: string,
  category: LearnCategoryId,
  publishOn: string,
  source: LearnDraft['source'],
): LearnDraft {
  const match = raw.match(/\{[\s\S]*\}/)
  let parsed: RawDraft = {}
  if (match) {
    try {
      parsed = JSON.parse(match[0]) as RawDraft
    } catch {
      parsed = {}
    }
  }

  const title = parsed.title?.trim() || fallbackTitle
  const lead = parsed.lead?.trim() || `${title}을 짧고 정확하게 읽습니다.`
  const sections = (parsed.sections ?? [])
    .filter((section) => section.heading && section.paragraphs?.length)
    .map((section) => ({
      heading: section.heading as string,
      paragraphs: (section.paragraphs ?? []).filter(Boolean),
    }))
  const takeaways = (parsed.takeaways ?? []).filter(Boolean).slice(0, 3)

  const built = article(
    slugifyLearnTitle(title),
    asCategory(category),
    title,
    lead,
    sections.length > 0
      ? sections
      : [
          {
            heading: LEARN_CATEGORY_DEFAULTS[category].tone === 'principle' ? '원리' : '재료',
            paragraphs: [lead, raw.slice(0, 280)],
          },
        ],
    takeaways.length > 0 ? takeaways : [lead],
  )

  return {
    ...built,
    publishOn: publishOn || todayKey(),
    source,
    createdAt: new Date().toISOString(),
  }
}
