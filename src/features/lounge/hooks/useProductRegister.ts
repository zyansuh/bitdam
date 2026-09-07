import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import type { ProductDraft } from '../types/lounge'
import { useLoungeScope } from '../providers/loungeScopeProvider'
import { draftToCatalogProduct } from '../utils/draftToCatalogProduct'
import { nextSellerCatalogId, upsertSellerProduct } from '../../../shared/utils/sellerCatalogStorage'

const SAMPLE =
  'https://images.unsplash.com/photo-1569529465841-df988a64df86?w=800&h=800&fit=crop&q=80'

const initial: ProductDraft = {
  step: 1,
  name: '문경 바람 사과 증류주 프리미엄 에디션',
  category: '증류식 소주',
  subcategory: '전통증류주',
  image: SAMPLE,
  extras: [SAMPLE, SAMPLE],
  blurb: '문경 사과를 발효해 오크통에서 숙성한 프리미엄 증류주입니다.',
  story: '산지와 양조 과정을 소비자에게 보여 줄 상세 설명을 적습니다.',
  price: '68000',
  stock: '120',
  shipMemo: '주류는 성인 확인 후 출고합니다. 제주·도서 추가 배송비가 있습니다.',
  saved: false,
}

export function useProductRegister() {
  const navigate = useNavigate()
  const { titleShop, shops, scopeId } = useLoungeScope()
  const shop = titleShop ?? shops.find((item) => item.id === scopeId) ?? shops[0]
  const [draft, setDraft] = useState<ProductDraft>(initial)

  function patch(next: Partial<ProductDraft>) {
    setDraft((prev) => ({ ...prev, ...next, saved: false }))
  }

  function go(step: ProductDraft['step']) {
    setDraft((prev) => ({ ...prev, step }))
  }

  function next() {
    setDraft((prev) => ({ ...prev, step: prev.step < 4 ? ((prev.step + 1) as ProductDraft['step']) : prev.step }))
  }

  function saveDraft() {
    setDraft((prev) => ({ ...prev, saved: true }))
  }

  function publish() {
    if (!shop || !draft.name.trim()) return
    const product = draftToCatalogProduct(draft, shop, nextSellerCatalogId())
    upsertSellerProduct(product)
    setDraft((prev) => ({ ...prev, saved: true }))
    navigate(`/products/${product.id}`)
  }

  return { draft, patch, go, next, saveDraft, publish, shop }
}
