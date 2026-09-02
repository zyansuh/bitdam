interface LoginHeroContentProps {
  compact?: boolean
}

export default function LoginHeroContent({ compact = false }: LoginHeroContentProps) {
  const size = compact ? 'compact' : 'full'

  return (
    <>
      <h1 className={`login-hero-title login-hero-title--${size}`}>
        시간이 흐를수록 깊어지는
        <br />
        우리 고유의 맛과 향
      </h1>
      <p className={`login-hero-lead login-hero-lead--${size}`}>
        가장 자연스럽고 편안한 맛과 향의 주류브랜드.
        전통 막걸리 브랜드 빚담에서 만나보세요.
      </p>
    </>
  )
}
