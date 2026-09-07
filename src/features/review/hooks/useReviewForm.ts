import { useState } from 'react'
import type { ReviewAttributeKey, ReviewAttributeScores } from '../../../shared/types/review'
import { appendReview } from '../../../shared/utils/reviewStorage'
import { REVIEW_NOTE_TAGS } from '../data/reviewOptions'

const EMPTY_ATTRIBUTES: ReviewAttributeScores = {
  taste: 5,
  aroma: 5,
  swallow: 5,
  value: 5,
}

const MAX_PHOTOS = 5
const MAX_FILE_BYTES = 10 * 1024 * 1024

function readFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(String(reader.result))
    reader.onerror = () => reject(new Error('파일을 읽지 못했습니다.'))
    reader.readAsDataURL(file)
  })
}

export function useReviewForm(productId: number) {
  const [recommend, setRecommend] = useState(5)
  const [attributes, setAttributes] = useState<ReviewAttributeScores>(EMPTY_ATTRIBUTES)
  const [tags, setTags] = useState<string[]>([REVIEW_NOTE_TAGS[0]])
  const [body, setBody] = useState('')
  const [photos, setPhotos] = useState<string[]>([])
  const [error, setError] = useState('')
  const [done, setDone] = useState(false)

  function setAttribute(key: ReviewAttributeKey, score: number) {
    setAttributes((current) => ({ ...current, [key]: score }))
  }

  function toggleTag(tag: string) {
    setTags((current) =>
      current.includes(tag) ? current.filter((item) => item !== tag) : [...current, tag],
    )
  }

  async function addFiles(fileList: FileList | null) {
    if (!fileList) {
      return
    }
    setError('')
    const next = [...photos]
    for (const file of Array.from(fileList)) {
      if (next.length >= MAX_PHOTOS) {
        setError('사진은 최대 5장까지 올릴 수 있습니다.')
        break
      }
      if (!file.type.startsWith('image/') && !file.type.startsWith('video/')) {
        setError('이미지 또는 동영상만 업로드할 수 있습니다.')
        continue
      }
      if (file.size > MAX_FILE_BYTES) {
        setError('파일은 10MB 이하여야 합니다.')
        continue
      }
      next.push(await readFileAsDataUrl(file))
    }
    setPhotos(next)
  }

  function removePhoto(index: number) {
    setPhotos((current) => current.filter((_, i) => i !== index))
  }

  function submit() {
    if (recommend < 1) {
      setError('추천 별점을 선택해 주세요.')
      return false
    }
    if (Object.values(attributes).some((score) => score < 1)) {
      setError('상세 속성 평가를 모두 선택해 주세요.')
      return false
    }
    if (body.trim().length < 10) {
      setError('후기는 최소 10자 이상 작성해 주세요.')
      return false
    }
    appendReview({
      id: `${Date.now()}`,
      productId,
      recommend,
      attributes,
      tags,
      body: body.trim(),
      photos,
      createdAt: new Date().toISOString(),
    })
    setDone(true)
    setError('')
    return true
  }

  return {
    recommend,
    setRecommend,
    attributes,
    setAttribute,
    tags,
    toggleTag,
    body,
    setBody,
    photos,
    addFiles,
    removePhoto,
    error,
    done,
    submit,
  }
}
