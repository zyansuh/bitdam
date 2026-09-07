import { brandStoryHero } from '../../brand/data/brandStory'

const KEY = 'bitdam.story.override'

export interface StoryOverride {
  title: string
  lead: string
}

export function readStoryOverride(): StoryOverride {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return { title: brandStoryHero.title, lead: brandStoryHero.lead }
    const parsed = JSON.parse(raw) as Partial<StoryOverride>
    return {
      title: parsed.title?.trim() || brandStoryHero.title,
      lead: parsed.lead?.trim() || brandStoryHero.lead,
    }
  } catch {
    return { title: brandStoryHero.title, lead: brandStoryHero.lead }
  }
}

export function writeStoryOverride(next: StoryOverride): void {
  localStorage.setItem(KEY, JSON.stringify(next))
}
