import { useSearchParams } from 'react-router-dom'
import { getProductById } from '../../../data/products'
import { readLastOrder } from '../../../shared/utils/orderStorage'

export function useClaimTarget() {
  const [searchParams] = useSearchParams()
  const order = readLastOrder()
  const requested = Number(searchParams.get('productId'))
  const productId =
    Number.isInteger(requested) && requested > 0 ? requested : (order?.productId ?? 1)
  const product = getProductById(productId) ?? getProductById(1)

  return {
    product,
    orderNo: order?.orderNo ?? 'ORD-20231015-8882',
    quantity: order?.quantity ?? 1,
  }
}
