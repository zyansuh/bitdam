import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../shared/hooks/useAuth'
import { clearLoginReturnPath } from '../../../shared/utils/loginReturnPath'
import { createAccount } from '../utils/accountStorage'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function useSignupForm(returnTo: string) {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [nickname, setNickname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [agree, setAgree] = useState(false)
  const [error, setError] = useState('')

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')

    if (!nickname.trim()) {
      setError('닉네임을 입력해 주세요.')
      return
    }
    if (!EMAIL_PATTERN.test(email.trim())) {
      setError('올바른 이메일 주소를 입력해 주세요.')
      return
    }
    if (password.length < 8) {
      setError('비밀번호는 8자 이상이어야 합니다.')
      return
    }
    if (password !== confirm) {
      setError('비밀번호 확인이 일치하지 않습니다.')
      return
    }
    if (!agree) {
      setError('회원가입 약관에 동의해 주세요.')
      return
    }

    try {
      const account = createAccount({ email, password, nickname })
      login({
        id: account.id,
        nickname: account.nickname,
        email: account.email,
        provider: 'email',
      })
      clearLoginReturnPath()
      navigate(returnTo, { replace: true })
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : '회원가입에 실패했습니다.')
    }
  }

  return {
    nickname,
    email,
    password,
    confirm,
    agree,
    error,
    setNickname,
    setEmail,
    setPassword,
    setConfirm,
    setAgree,
    submit,
  }
}
