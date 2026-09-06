import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteAccount } from '../../auth/utils/accountStorage'
import { useAuth } from '../../../shared/hooks/useAuth'

export function useWithdrawAccount() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [checked, setChecked] = useState(false)
  const [error, setError] = useState('')

  function withdraw() {
    setError('')
    if (!checked) {
      setError('안내 사항을 확인해 주세요.')
      return
    }
    if (user?.provider === 'email') {
      deleteAccount(user.id)
    }
    logout()
    navigate('/')
  }

  return { checked, setChecked, withdraw, error }
}
