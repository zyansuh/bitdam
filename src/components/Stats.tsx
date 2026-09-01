const stats = [
  { value: '31곳', label: '전국 제휴 양조장' },
  { value: '9개 권역', label: '전국 8도 지역성' },
  { value: '5개', label: '국가유산 장인 손맛' },
  { value: '100+ 명', label: '빚담 메이커' },
]

export default function Stats() {
  return (
    <section className="bg-white py-8 sm:py-10 md:py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:gap-8 sm:px-6 md:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-1.5 text-center sm:gap-2">
            <span className="font-serif text-2xl font-bold text-gold sm:text-3xl md:text-4xl">
              {stat.value}
            </span>
            <span className="text-[11px] text-muted sm:text-xs md:text-sm">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
