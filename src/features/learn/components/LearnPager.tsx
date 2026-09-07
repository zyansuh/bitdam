interface LearnPagerProps {
  page: number
  pages: number
  onPage: (page: number) => void
}

export default function LearnPager({ page, pages, onPage }: LearnPagerProps) {
  if (pages <= 1) return null

  const numbers = Array.from({ length: pages }, (_, index) => index + 1)

  return (
    <nav className="learn-pager" aria-label="술 상식 목록 페이지">
      <button type="button" className="learn-pager__btn" disabled={page <= 1} onClick={() => onPage(page - 1)}>
        이전
      </button>
      <ol className="learn-pager__pages">
        {numbers.map((item) => (
          <li key={item}>
            <button
              type="button"
              className={item === page ? 'learn-pager__num is-current' : 'learn-pager__num'}
              aria-current={item === page ? 'page' : undefined}
              onClick={() => onPage(item)}
            >
              {item}
            </button>
          </li>
        ))}
      </ol>
      <button type="button" className="learn-pager__btn" disabled={page >= pages} onClick={() => onPage(page + 1)}>
        다음
      </button>
    </nav>
  )
}
