interface NoticePagerProps {
  page: number
  pages: number
  onPage: (page: number) => void
}

export default function NoticePager({ page, pages, onPage }: NoticePagerProps) {
  const buttons = Array.from({ length: Math.min(pages, 5) }, (_, index) => index + 1)

  return (
    <nav className="notice-pager" aria-label="공지 페이지">
      <button type="button" className="notice-pager__btn" disabled={page <= 1} onClick={() => onPage(page - 1)}>
        {'<'}
      </button>
      {buttons.map((item) => (
        <button
          key={item}
          type="button"
          className={`notice-pager__btn${item === page ? ' notice-pager__btn--on' : ''}`}
          onClick={() => onPage(item)}
        >
          {item}
        </button>
      ))}
      <button type="button" className="notice-pager__btn" disabled={page >= pages} onClick={() => onPage(page + 1)}>
        {'>'}
      </button>
    </nav>
  )
}
