import { useState, type FormEvent } from 'react'

interface CommunityComposerProps {
  onSubmit: (title: string, body: string, image?: string) => void
}

export default function CommunityComposer({ onSubmit }: CommunityComposerProps) {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [image, setImage] = useState('')
  const canPost = title.trim().length > 0 && body.trim().length > 0

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    if (!canPost) return
    onSubmit(title, body, image)
    setTitle('')
    setBody('')
    setImage('')
  }

  return (
    <form className="community-composer" onSubmit={handleSubmit}>
      <input
        className="community-composer__title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="오늘 마신 전통주의 한 줄"
        maxLength={80}
      />
      <textarea
        className="community-composer__body"
        value={body}
        onChange={(event) => setBody(event.target.value)}
        placeholder="오늘 마신 전통주의 맛을 남겨 보세요."
        maxLength={2000}
      />
      <input
        className="community-composer__title"
        value={image}
        onChange={(event) => setImage(event.target.value)}
        placeholder="사진 주소 (선택)"
      />
      <button type="submit" className="community-composer__submit" disabled={!canPost}>
        게시하기
      </button>
    </form>
  )
}
