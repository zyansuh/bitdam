import { useState } from 'react'
import type { ClaimKind } from '../types/claim'
import { CLAIM_REASONS } from '../data/claimOptions'

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

export function useClaimForm() {
  const [kind, setKind] = useState<ClaimKind>('exchange')
  const [reason, setReason] = useState<string>(CLAIM_REASONS[0])
  const [detail, setDetail] = useState('')
  const [photos, setPhotos] = useState<string[]>([])
  const [error, setError] = useState('')
  const [done, setDone] = useState(false)

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
      if (!file.type.startsWith('image/')) {
        setError('이미지만 업로드할 수 있습니다.')
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
    if (!reason) {
      setError('교환/반품 사유를 선택해 주세요.')
      return false
    }
    if (detail.trim().length < 10) {
      setError('상세 사유는 최소 10자 이상 작성해 주세요.')
      return false
    }
    setError('')
    setDone(true)
    return true
  }

  return {
    kind,
    setKind,
    reason,
    setReason,
    detail,
    setDetail,
    photos,
    addFiles,
    removePhoto,
    error,
    done,
    submit,
  }
}
