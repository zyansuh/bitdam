interface LoungeProductDetailProps {
  story: string
  onStory: (value: string) => void
}

export default function LoungeProductDetail({ story, onStory }: LoungeProductDetailProps) {
  return (
    <div className="lounge-form">
      <h2>상세설명</h2>
      <label>
        상품 스토리
        <textarea rows={8} value={story} onChange={(event) => onStory(event.target.value)} />
      </label>
    </div>
  )
}
