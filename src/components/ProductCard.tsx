import { Star } from 'lucide-react'
import type { Product } from '../data/products'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group cursor-pointer">
      <div className="relative mb-4 aspect-[3/4] overflow-hidden rounded-sm bg-cream-dark">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <p className="mb-1 text-xs text-muted">{product.category}</p>
      <h3 className="mb-2 text-sm font-medium text-charcoal group-hover:text-gold transition-colors">
        {product.name}
      </h3>
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold">{product.price.toLocaleString()}원</span>
        <span className="flex items-center gap-1 text-xs text-muted">
          <Star size={12} className="fill-gold text-gold" />
          {product.rating}
        </span>
      </div>
    </article>
  )
}
