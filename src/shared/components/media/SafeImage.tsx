import { useState, type ImgHTMLAttributes } from 'react'
import { MOCK_IMAGES } from '../../../data/mockImages'

interface SafeImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string
}

export default function SafeImage({ src, fallbackSrc = MOCK_IMAGES.placeholder, alt = '', className, ...rest }: SafeImageProps) {
  const [failed, setFailed] = useState(false)
  const resolved = !src || failed ? fallbackSrc : src

  return (
    <img
      {...rest}
      src={resolved}
      alt={alt}
      className={className}
      onError={() => {
        if (!failed) setFailed(true)
      }}
    />
  )
}
