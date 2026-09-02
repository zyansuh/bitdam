import { Link } from 'react-router-dom'
import { Star, X } from 'lucide-react'
import type { Product } from '../../../data/products'
import { formatWon } from '../../../shared/utils/formatWon'
import TasteBars from './TasteBars'

interface CompareTableProps {
  products: Product[]
  pathWithout: (id: number) => string
}

export default function CompareTable({ products, pathWithout }: CompareTableProps) {
  return (
    <div className="compare-table-wrap">
      <table className="compare-table">
        <thead>
          <tr>
            <th className="compare-table__stub">항목</th>
            {products.map((product) => (
              <th key={product.id} className="compare-table__head">
                <Link to={`/products/${product.id}`} className="compare-table__media">
                  <img src={product.image} alt="" className="compare-table__image" />
                </Link>
                <Link to={`/products/${product.id}`} className="compare-table__name">
                  {product.name}
                </Link>
                <Link to={pathWithout(product.id)} className="compare-table__remove" aria-label={`${product.name} 제외`}>
                  <X size={14} />
                </Link>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>가격</th>
            {products.map((product) => (
              <td key={product.id}>{formatWon(product.price)}</td>
            ))}
          </tr>
          <tr>
            <th>도수</th>
            {products.map((product) => (
              <td key={product.id}>{product.abv}%</td>
            ))}
          </tr>
          <tr>
            <th>용량</th>
            {products.map((product) => (
              <td key={product.id}>{product.volumeMl}ml</td>
            ))}
          </tr>
          <tr>
            <th>지역</th>
            {products.map((product) => (
              <td key={product.id}>{product.region}</td>
            ))}
          </tr>
          <tr>
            <th>양조장</th>
            {products.map((product) => (
              <td key={product.id}>{product.brewery}</td>
            ))}
          </tr>
          <tr>
            <th>맛 프로필</th>
            {products.map((product) => (
              <td key={product.id}>
                <TasteBars taste={product.taste} compact />
              </td>
            ))}
          </tr>
          <tr>
            <th>주요 수상</th>
            {products.map((product) => (
              <td key={product.id}>
                {product.awards.length > 0 ? product.awards.join(' · ') : '—'}
              </td>
            ))}
          </tr>
          <tr>
            <th>평점</th>
            {products.map((product) => (
              <td key={product.id} className="compare-table__rating">
                <Star size={12} className="compare-table__star" />
                {product.rating} · 리뷰 {product.reviewCount}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}
