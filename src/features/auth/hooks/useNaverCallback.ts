import { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useAuth } from '../../../shared/hooks/useAuth'
import { useTheme } from '../../../shared/hooks/useTheme'
import { readThemeFromOauthState } from '../../../shared/utils/themeStorage'
import { completeNaverLogin } from '../utils/naverAuth'
import { formatUserHonorific } from '../../../shared/utils/formatUserHonorific'
import { clearLoginReturnPath, readLoginReturnPath } from '../../../shared/utils/loginReturnPath'

export type NaverCallbackStatus = 'loading' | 'error' | 'success'

export function useNaverCallback() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const { login } = useAuth()
  const { setTheme } = useTheme()
  const [status, setStatus] = useState<NaverCallbackStatus>('loading')
  const [message, setMessage] = useState('네이버 로그인 처리 중...')
  const oauthTheme = readThemeFromOauthState(searchParams.get('state'))

  useLayoutEffect(() => {
    if (oauthTheme) {
      setTheme(oauthTheme)
    }
  }, [oauthTheme, setTheme])

  useEffect(() => {
    const error = searchParams.get('error')
    const code = searchParams.get('code')
    const state = searchParams.get('state')

    if (error) {
      setStatus('error')
      setMessage('네이버 로그인이 취소되었거나 거부되었습니다.')
      return
    }

    if (!code) {
      setStatus('error')
      setMessage('네이버 인증 코드가 없습니다. 로그인 페이지에서 다시 시도해 주세요.')
      return
    }

    let cancelled = false

    async function completeLogin() {
      try {
        const user = await completeNaverLogin(code!, state)
        if (cancelled) return
        login(user)
        setStatus('success')
        setMessage(`${formatUserHonorific(user.nickname)}, 환영합니다.`)
        const returnTo = readLoginReturnPath()
        clearLoginReturnPath()
        window.setTimeout(() => navigate(returnTo, { replace: true }), 800)
      } catch (caught) {
        if (cancelled) return
        setStatus('error')
        setMessage(caught instanceof Error ? caught.message : '네이버 로그인에 실패했습니다.')
      }
    }

    void completeLogin()

    return () => {
      cancelled = true
    }
  }, [login, navigate, searchParams])

  return { status, message }
}
