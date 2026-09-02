import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../shared/hooks/useAuth'
import { clearLoginReturnPath } from '../../../shared/utils/loginReturnPath'
import { matchAccount } from '../utils/accountStorage'

export function useEmailLogin(returnTo: string) {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [agree, setAgree] = useState(false)
  const [error, setError] = useState('')

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')

    if (!email.trim() || !password) {
      setError('이메일과 비밀번호를 입력해 주세요.')
      return
    }
    if (!agree) {
      setError('로그인 약관에 동의해 주세요.')
      return
    }

    const account = matchAccount(email, password)
    if (!account) {
      setError('이메일 또는 비밀번호가 올바르지 않습니다.')
      return
    }

    login({
      id: account.id,
      nickname: account.nickname,
      email: account.email,
      provider: 'email',
    })
    clearLoginReturnPath()
    navigate(returnTo, { replace: true })
  }

  return { email, password, agree, error, setEmail, setPassword, setAgree, submit }
}
