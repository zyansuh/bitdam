export default function PromoBanner() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="relative overflow-hidden rounded-sm">
        <img
          src="https://images.unsplash.com/photo-1566633806327-68e152aaf26d?w=1400&h=400&fit=crop&q=80"
          alt="성수동 삼해소주 가옥"
          className="h-44 w-full object-cover sm:h-48 md:h-56 lg:h-64"
        />
        <div className="absolute inset-0 bg-navy/60" />
        <div className="absolute inset-0 flex flex-col items-start justify-end gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-0 md:px-12">
          <h3 className="font-serif text-base font-bold leading-snug text-white sm:text-xl md:text-2xl lg:text-3xl">
            성수동 삼해소주 가옥
            <span className="hidden sm:inline"> </span>
            <br className="sm:hidden" />
            도심 속 양조장
          </h3>
          <button
            type="button"
            className="w-full shrink-0 rounded-sm bg-gold px-5 py-2.5 text-xs font-medium text-white transition-colors hover:bg-gold-dark sm:w-auto md:px-6 md:py-3 md:text-sm"
          >
            브랜드 투어 예약하기
          </button>
        </div>
      </div>
    </section>
  )
}
