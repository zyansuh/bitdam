import { useState } from 'react'
import type { Product } from '../../../data/products'
import SafeImage from '../../../shared/components/media/SafeImage'

interface ProductDetailGalleryProps {
  product: Product
}

export default function ProductDetailGallery({ product }: ProductDetailGalleryProps) {
  const [active, setActive] = useState(0)
  const current = product.gallery[active] ?? product.image

  return (
    <div className="pdp-gallery">
      <div className="pdp-gallery__stage">
        <SafeImage src={current} alt={product.name} className="pdp-gallery__image" />
      </div>
      <div className="pdp-gallery__thumbs">
        {product.gallery.map((src, index) => (
          <button
            key={`${src}-${index}`}
            type="button"
            className={index === active ? 'pdp-gallery__thumb pdp-gallery__thumb--on' : 'pdp-gallery__thumb'}
            onClick={() => setActive(index)}
            aria-label={`${product.name} 이미지 ${index + 1}`}
          >
            <SafeImage src={src} alt="" className="pdp-gallery__thumb-image" />
          </button>
        ))}
      </div>
    </div>
  )
}
