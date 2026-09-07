import { listCatalogProducts } from '../../../data/products'
import { CHAT_ROLE } from '../data/chatPrompt'
import { CLASS_POLICY } from '../data/classPolicy'
import { ORDER_POLICY } from '../data/orderPolicy'
import { RECOMMENDATION_RULES } from '../data/recommendationRules'
import { REFUND_POLICY } from '../data/refundPolicy'
import { SAFETY_POLICY } from '../data/safetyPolicy'
import { SHIPPING_POLICY } from '../data/shippingPolicy'

export function buildCatalogBlock(): string {
  return listCatalogProducts()
    .slice(0, 16)
    .map(
      (item) =>
        `- ${item.name} | 카테고리: ${item.category} | 도수: ${item.abv}도 | 가격: ${item.price}원 | 지역: ${item.region}`,
    )
    .join('\n')
}

export function buildBitdamSystemPrompt(): string {
  const catalog = buildCatalogBlock()
  const firstName = listCatalogProducts()[0]?.name ?? '상품명'
  const recommendation = RECOMMENDATION_RULES.replace('{{CATALOG}}', catalog).replace(
    '{{FIRST_PRODUCT}}',
    firstName,
  )

  return [
    CHAT_ROLE,
    SAFETY_POLICY,
    recommendation,
    CLASS_POLICY,
    ORDER_POLICY,
    SHIPPING_POLICY,
    REFUND_POLICY,
  ].join('\n\n')
}
