import { useState } from 'react'
import type { AuthNotice } from '../types/authNotice'
import { KakaoConfigError } from '../utils/kakaoConfigError'
import { buildKakaoAuthorizeUrl } from '../utils/kakaoAuth'

export function useKakaoLogin() {
  const [notice, setNotice] = useState<AuthNotice | null>(null)

  const startKakaoLogin = () => {
    try {
      window.location.assign(buildKakaoAuthorizeUrl())
    } catch (error) {
      if (error instanceof KakaoConfigError) {
        setNotice({ title: error.title, body: error.message })
        return
      }

      setNotice({
        title: '카카오 로그인을 시작할 수 없습니다',
        body: error instanceof Error ? error.message : '잠시 후 다시 시도해 주세요.',
      })
    }
  }

  const clearNotice = () => {
    setNotice(null)
  }

  return { startKakaoLogin, notice, clearNotice }
}
