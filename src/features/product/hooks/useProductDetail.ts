import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../../data/products'
import { findSimilarProducts } from '../utils/findSimilarProducts'

export function useProductDetail() {
  const { id } = useParams()
  const productId = Number(id)
  const product = Number.isInteger(productId) ? getProductById(productId) : undefined
  const similar = useMemo(
    () => (product ? findSimilarProducts(product, 2) : []),
    [product],
  )

  return { product, similar }
}
