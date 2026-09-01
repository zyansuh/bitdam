import { Link } from 'react-router-dom'
import { Menu, Search, ShoppingCart, User, X } from 'lucide-react'
import { useState } from 'react'

const navLinks = ['스토리', '커뮤니티', '이벤트', '가이드']

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-cream-dark bg-cream/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:h-16 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gold sm:h-8 sm:w-8">
            <span className="font-serif text-[10px] font-bold text-white sm:text-xs">빚</span>
          </div>
          <span className="font-serif text-lg font-bold tracking-tight sm:text-xl">빚담</span>
        </Link>

        <nav className="hidden items-center gap-8 min-[1000px]:flex lg:gap-10">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="text-sm font-medium text-charcoal/80 transition-colors hover:text-gold"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-5">
          <button
            type="button"
            aria-label="검색"
            className="text-charcoal/70 transition-colors hover:text-gold"
          >
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label="장바구니"
            className="relative text-charcoal/70 transition-colors hover:text-gold"
          >
            <ShoppingCart size={20} strokeWidth={1.5} />
            <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-gold" />
          </button>
          <Link
            to="/login"
            aria-label="마이페이지"
            className="text-charcoal/70 transition-colors hover:text-gold"
          >
            <User size={20} strokeWidth={1.5} />
          </Link>
          <button
            type="button"
            aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
            className="text-charcoal/70 transition-colors hover:text-gold min-[1000px]:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-cream-dark bg-cream px-4 py-4 min-[1000px]:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link}`}
                  className="block rounded-md px-3 py-2.5 text-sm font-medium text-charcoal/80 transition-colors hover:bg-cream-dark hover:text-gold"
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
