import { useState } from 'react'
import type { AuthNotice } from '../types/authNotice'
import { NaverConfigError } from '../utils/naverConfigError'
import { buildNaverAuthorizeUrl } from '../utils/naverAuth'

export function useNaverLogin() {
  const [notice, setNotice] = useState<AuthNotice | null>(null)

  const startNaverLogin = () => {
    try {
      window.location.assign(buildNaverAuthorizeUrl())
    } catch (error) {
      if (error instanceof NaverConfigError) {
        setNotice({ title: error.title, body: error.message })
        return
      }

      setNotice({
        title: '네이버 로그인을 시작할 수 없습니다',
        body: error instanceof Error ? error.message : '잠시 후 다시 시도해 주세요.',
      })
    }
  }

  const clearNotice = () => {
    setNotice(null)
  }

  return { startNaverLogin, notice, clearNotice }
}
