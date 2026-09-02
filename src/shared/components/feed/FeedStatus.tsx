interface FeedStatusProps {
  loading: boolean
  hasMore: boolean
  emptyLabel: string
  hasItems: boolean
}

export default function FeedStatus({ loading, hasMore, emptyLabel, hasItems }: FeedStatusProps) {
  if (loading) {
    return (
      <div className="feed-status">
        <span className="feed-status__spinner" />
        불러오는 중...
      </div>
    )
  }

  if (!hasMore && hasItems) {
    return <p className="feed-status__end">{emptyLabel}</p>
  }

  return null
}
