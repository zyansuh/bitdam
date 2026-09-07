import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../shared/hooks/useAuth'
import { updateAccountWorkshop } from '../../auth/utils/accountStorage'
import { findShopByBizNo } from '../utils/findShopByBizNo'
import { bizNoDigits, normalizeBizNo } from '../utils/normalizeBizNo'
import type { SellerShop } from '../types/lounge'

export function useSellerVerify() {
  const { user, updateUser } = useAuth()
  const navigate = useNavigate()
  const [bizNo, setBizNo] = useState('')
  const [owner, setOwner] = useState(user?.nickname ?? '')
  const [error, setError] = useState('')
  const [matched, setMatched] = useState<SellerShop | null>(null)

  function lookup() {
    setError('')
    setMatched(null)
    const digits = bizNoDigits(bizNo)
    if (digits.length !== 10) {
      setError('사업자등록번호 10자리를 입력해 주세요.')
      return
    }
    const shop = findShopByBizNo(bizNo)
    if (!shop) {
      setError('빚담 입점 명단에 없는 사업자번호입니다. 데모는 한산 314-81-67890 을 써 보세요.')
      return
    }
    const typed = owner.trim()
    if (!typed) {
      setError('대표자명을 입력해 주세요.')
      return
    }
    if (typed !== shop.owner && typed !== shop.name) {
      setError(`대표자명이 일치하지 않습니다. 등록 대표는 ${shop.owner}입니다.`)
      return
    }
    setBizNo(normalizeBizNo(bizNo))
    setMatched(shop)
  }

  function confirm() {
    if (!matched || !user) return
    const claim = {
      sellerId: matched.id,
      sellerBizNo: matched.bizNo,
      sellerVerified: true as const,
      workspaceRole: 'seller' as const,
    }
    updateUser(claim)
    updateAccountWorkshop(user.id, claim)
    navigate('/mypage/lounge', { replace: true })
  }

  return { bizNo, owner, error, matched, setBizNo, setOwner, lookup, confirm }
}