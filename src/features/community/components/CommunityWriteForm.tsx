import { useState, type ChangeEvent, type FormEvent } from 'react'
import type { CommunityCategoryId } from '../types/communityPost'
import { COMMUNITY_CATEGORIES } from '../data/communityCategories'

interface CommunityWriteFormProps {
  mode?: 'create' | 'edit'
  hint?: string
  initialTitle?: string
  initialBody?: string
  initialImage?: string
  initialCategory?: Exclude<CommunityCategoryId, 'all'>
  onSubmit: (input: {
    title: string
    body: string
    image?: string
    category: Exclude<CommunityCategoryId, 'all'>
    tags: string[]
  }) => void
  onSaveDraft?: (input: {
    title: string
    body: string
    image?: string
    category: Exclude<CommunityCategoryId, 'all'>
  }) => void
}

function tagsFromText(title: string, body: string) {
  return [...`${title} ${body}`.matchAll(/#[\w가-힣]+/g)].map((match) => match[0])
}

export default function CommunityWriteForm({
  mode = 'create',
  hint = '커뮤니티 예의를 지켜 주세요. 글은 공개 피드에 올라갑니다.',
  initialTitle = '',
  initialBody = '',
  initialImage = '',
  initialCategory = 'tour',
  onSubmit,
  onSaveDraft,
}: CommunityWriteFormProps) {
  const [title, setTitle] = useState(initialTitle)
  const [body, setBody] = useState(initialBody)
  const [image, setImage] = useState(initialImage)
  const [category, setCategory] = useState(initialCategory)
  const canPost = title.trim().length > 0 && body.trim().length > 0

  function handleFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (!file) return
    if (file.size > 10 * 1024 * 1024) {
      window.alert('사진은 10MB까지 올릴 수 있습니다.')
      return
    }
    const reader = new FileReader()
    reader.onload = () => {
      if (typeof reader.result === 'string') setImage(reader.result)
    }
    reader.readAsDataURL(file)
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    if (!canPost) return
    onSubmit({
      title,
      body,
      image,
      category,
      tags: tagsFromText(title, body),
    })
  }

  return (
    <form className="community-write" onSubmit={handleSubmit}>
      <div className="community-write__bar">
        <h1 className="community-write__heading">{mode === 'edit' ? '글 수정' : '새 글 쓰기'}</h1>
        {onSaveDraft ? (
          <button
            type="button"
            className="community-write__ghost"
            onClick={() => onSaveDraft({ title, body, image, category })}
          >
            임시저장
          </button>
        ) : null}
      </div>
      <label className="community-write__label">
        분류
        <select
          className="community-write__select"
          value={category}
          onChange={(event) => setCategory(event.target.value as Exclude<CommunityCategoryId, 'all'>)}
        >
          {COMMUNITY_CATEGORIES.filter((item) => item.id !== 'all').map((item) => (
            <option key={item.id} value={item.id}>
              {item.label}
            </option>
          ))}
        </select>
      </label>
      <input
        className="community-write__title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="제목을 입력하세요"
        maxLength={80}
      />
      <textarea
        className="community-write__body"
        value={body}
        onChange={(event) => setBody(event.target.value)}
        placeholder="오늘 마신 전통주, 다녀온 양조장 이야기를 적어 주세요. 해시태그는 #전통주 처럼 본문에 넣으면 됩니다."
        maxLength={8000}
      />
      <label className="community-write__drop">
        <input type="file" accept="image/jpeg,image/png" onChange={handleFile} />
        {image ? '사진이 첨부되었습니다. 다시 누르면 교체됩니다.' : '한옥 도가 풍경 사진을 클릭해 첨부하세요. (JPG, PNG, 10MB)'}
      </label>
      <p className="community-write__hint">{hint}</p>
      <button type="submit" className="community-write__submit" disabled={!canPost}>
        {mode === 'edit' ? '수정하기' : '게시하기'}
      </button>
    </form>
  )
}
