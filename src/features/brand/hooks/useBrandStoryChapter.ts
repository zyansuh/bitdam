import { useEffect, useState } from 'react'
import { brandStoryChapters } from '../data/brandStory'

function chapterFromHash(): string {
  const id = window.location.hash.replace('#chapter-', '')
  return brandStoryChapters.some((item) => item.id === id) ? id : brandStoryChapters[0].id
}

export function useBrandStoryChapter() {
  const [chapterId, setChapterId] = useState(() =>
    typeof window === 'undefined' ? brandStoryChapters[0].id : chapterFromHash(),
  )
  const index = brandStoryChapters.findIndex((item) => item.id === chapterId)
  const chapter = brandStoryChapters[index] ?? brandStoryChapters[0]
  const previous = brandStoryChapters[index - 1]
  const next = brandStoryChapters[index + 1]

  useEffect(() => {
    function onHash() {
      setChapterId(chapterFromHash())
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  function open(id: string) {
    setChapterId(id)
    window.history.replaceState(null, '', `#chapter-${id}`)
    document.getElementById('brand-story-essay')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return { chapter, previous, next, open }
}
