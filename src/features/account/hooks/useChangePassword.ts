import { useState } from 'react'
import { updateAccountPassword } from '../../auth/utils/accountStorage'
import { useAuth } from '../../../shared/hooks/useAuth'

export function useChangePassword() {
  const { user } = useAuth()
  const [current, setCurrent] = useState('')
  const [next, setNext] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  function changePassword() {
    setMessage('')
    setError('')
    if (!user) return
    if (user.provider !== 'email') {
      setError('카카오 로그인 계정은 비밀번호를 이 화면에서 바꿀 수 없습니다.')
      return
    }
    try {
      updateAccountPassword(user.id, current, next)
      setCurrent('')
      setNext('')
      setMessage('비밀번호를 변경했습니다.')
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : '변경에 실패했습니다.')
    }
  }

  return { current, setCurrent, next, setNext, changePassword, message, error, isEmail: user?.provider === 'email' }
}
