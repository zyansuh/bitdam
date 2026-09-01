export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div
        className="absolute inset-x-0 top-0 h-32 bg-cover bg-center opacity-30 sm:h-40 md:h-48"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1600607686527-3651a3070f8a?w=1600&h=400&fit=crop&q=80)',
        }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-12 sm:px-6 sm:py-16 md:gap-10 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-24">
        <div className="order-2 flex flex-col gap-4 sm:gap-6 lg:order-1">
          <h1 className="font-serif text-3xl font-bold leading-tight tracking-tight text-charcoal sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.2]">
            다섯 개의 손이
            <br />
            한 병에 모이다.
          </h1>
          <p className="max-w-md text-sm leading-relaxed text-muted sm:text-base">
            전국 31개 양조장의 장인들이 정성껏 빚어낸 빛담의 전통주.
            시간이 깊어질수록 더욱 풍부해지는 우리 고유의 맛과 향을 한 병에 담았습니다.
          </p>
          <div className="flex flex-col gap-2.5 pt-1 sm:flex-row sm:flex-wrap sm:gap-3 sm:pt-2">
            <button
              type="button"
              className="w-full rounded-sm bg-gold px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-gold-dark sm:w-auto"
            >
              브랜드 이야기
            </button>
            <button
              type="button"
              className="w-full rounded-sm border border-charcoal/20 bg-white px-8 py-3 text-sm font-medium text-charcoal transition-colors hover:border-gold hover:text-gold sm:w-auto"
            >
              브랜드 스토어
            </button>
          </div>
        </div>

        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <div className="aspect-4/5 overflow-hidden rounded-sm bg-cream-dark">
              <img
                src="https://images.unsplash.com/photo-1569529465841-df988a64df86?w=600&h=750&fit=crop&q=80"
                alt="빛담 전통주"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-3 -left-3 h-16 w-16 rounded-sm bg-gold/10 sm:-bottom-4 sm:-left-4 sm:h-24 sm:w-24" />
          </div>
        </div>
      </div>
    </section>
  )
}
