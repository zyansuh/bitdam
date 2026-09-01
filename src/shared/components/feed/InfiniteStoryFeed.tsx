import { useCallback, useState } from 'react'
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll'

interface InfiniteStoryFeedProps {
  className?: string
}

const STORY_POOL = [
  { id: 1, tag: '양조장', title: '전통 장독대에서 숙성되는 깊은 맛', region: '전북 고창' },
  { id: 2, tag: '장인', title: '3대째 이어온 가양주 제조 비법', region: '경기 양주' },
  { id: 3, tag: '막걸리', title: '쌀과 누룩의 황금비율을 지키는 이유', region: '충남 아산' },
  { id: 4, tag: '투어', title: '성수동 도심 속 양조장 체험 프로그램', region: '서울 성수' },
  { id: 5, tag: '증류주', title: '오랜 시간 증류해 완성하는 깔끔한 풍미', region: '경북 안동' },
  { id: 6, tag: '과실주', title: '제철 과일과 전통주의 조화', region: '전남 순천' },
]

function generateStories(offset: number, count: number) {
  return Array.from({ length: count }, (_, i) => {
    const base = STORY_POOL[(offset + i) % STORY_POOL.length]
    return {
      ...base,
      id: offset + i + 1,
      title: offset + i >= STORY_POOL.length ? `${base.title} · ${Math.floor((offset + i) / STORY_POOL.length) + 1}` : base.title,
    }
  })
}

export default function InfiniteStoryFeed({ className = '' }: InfiniteStoryFeedProps) {
  const [stories, setStories] = useState(() => generateStories(0, 4))
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)

  const loadMore = useCallback(() => {
    if (loading || !hasMore) return

    setLoading(true)
    requestAnimationFrame(() => {
      setTimeout(() => {
        setStories((prev) => {
          const next = [...prev, ...generateStories(prev.length, 4)]
          if (next.length >= 24) setHasMore(false)
          return next
        })
        setLoading(false)
      }, 350)
    })
  }, [loading, hasMore])

  const sentinelRef = useInfiniteScroll(loadMore, { enabled: hasMore && !loading })

  return (
    <section className={`border-t border-cream-dark bg-white py-10 sm:py-12 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 font-serif text-lg font-bold text-charcoal sm:mb-8 sm:text-xl">
          빛담 이야기
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
          {stories.map((story) => (
            <article
              key={story.id}
              className="rounded-md border border-cream-dark bg-cream/50 p-5 transition-colors hover:border-gold/40 sm:p-6"
            >
              <span className="text-[11px] font-medium text-gold">{story.tag}</span>
              <h3 className="mt-2 text-sm font-medium leading-relaxed text-charcoal sm:text-base">
                {story.title}
              </h3>
              <p className="mt-2 text-xs text-muted">{story.region}</p>
            </article>
          ))}
        </div>

        <div ref={sentinelRef} className="flex justify-center py-8">
          {loading && (
            <div className="flex items-center gap-2 text-sm text-muted">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-gold border-t-transparent" />
              불러오는 중...
            </div>
          )}
          {!hasMore && <p className="text-xs text-muted">모든 이야기를 불러왔습니다</p>}
        </div>
      </div>
    </section>
  )
}
