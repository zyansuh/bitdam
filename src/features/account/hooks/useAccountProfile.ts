import { useState } from 'react'
import { useAuth } from '../../../shared/hooks/useAuth'
import { interestOptions } from '../data/mypageMock'

const MAX_PHOTO_BYTES = 10 * 1024 * 1024

export function useAccountProfile() {
  const { user, updateUser } = useAuth()
  const [nickname, setNickname] = useState(user?.nickname ?? '')
  const [email, setEmail] = useState(user?.email ?? '')
  const [phone, setPhone] = useState(user?.phone ?? '')
  const [birth, setBirth] = useState(user?.birth ?? '')
  const [interests, setInterests] = useState<string[]>(user?.interests ?? interestOptions.slice(0, 2))
  const [preview, setPreview] = useState(user?.profileImage ?? '')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  function toggleInterest(option: string) {
    setInterests((current) =>
      current.includes(option) ? current.filter((item) => item !== option) : [...current, option],
    )
  }

  function onPickPhoto(file: File | undefined) {
    setError('')
    if (!file) return
    if (!['image/jpeg', 'image/png'].includes(file.type)) {
      setError('JPG, PNG 파일만 올릴 수 있습니다.')
      return
    }
    if (file.size > MAX_PHOTO_BYTES) {
      setError('사진은 최대 10MB까지 가능합니다.')
      return
    }
    const reader = new FileReader()
    reader.onload = () => {
      if (typeof reader.result === 'string') setPreview(reader.result)
    }
    reader.readAsDataURL(file)
  }

  function clearPhoto() {
    setPreview('')
  }

  function saveProfile() {
    setError('')
    const trimmed = nickname.trim()
    if (!trimmed) {
      setError('닉네임을 입력해 주세요.')
      return
    }
    updateUser({
      nickname: trimmed,
      email: email.trim() || undefined,
      phone: phone.trim() || undefined,
      birth: birth.trim() || undefined,
      interests,
      profileImage: preview || undefined,
    })
    setMessage('설정을 저장했습니다.')
  }

  return {
    nickname,
    setNickname,
    email,
    setEmail,
    phone,
    setPhone,
    birth,
    setBirth,
    interests,
    toggleInterest,
    preview,
    onPickPhoto,
    clearPhoto,
    saveProfile,
    message,
    error,
    verified: Boolean(user?.email),
  }
}
