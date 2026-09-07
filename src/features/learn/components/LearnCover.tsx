import SafeImage from '../../../shared/components/media/SafeImage'

interface LearnCoverProps {
  src: string
  alt: string
}

export default function LearnCover({ src, alt }: LearnCoverProps) {
  return (
    <figure className="learn-cover">
      <SafeImage src={src} alt={alt} className="learn-cover__img" />
    </figure>
  )
}
