import { useState } from 'react'
import type { AuthNotice } from '../types/authNotice'

export function useAppleLogin() {
  const [notice, setNotice] = useState<AuthNotice | null>(null)

  const startAppleLogin = () => {
    setNotice({
      title: 'Apple 로그인은 서버 키가 필요합니다',
      body: 'Sign in with Apple은 비공개 키로 JWT를 서명해야 해서 SPA에 넣을 수 없습니다. 백엔드에서 client_secret을 발급한 뒤 연동할 수 있습니다.',
    })
  }

  const clearNotice = () => {
    setNotice(null)
  }

  return { startAppleLogin, notice, clearNotice }
}
