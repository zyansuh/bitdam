import { Link } from 'react-router-dom'
import InfiniteProductFeed from '../shared/components/feed/InfiniteProductFeed'
import InfiniteStoryFeed from '../shared/components/feed/InfiniteStoryFeed'
import PageLayout from '../shared/components/layout/PageLayout'

const LEFT_HERO_IMAGE =
  'https://images.unsplash.com/photo-1600607686527-3651a3070f8a?w=1200&h=1600&fit=crop&q=80'

function LoginBrandBadge() {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold shadow-sm sm:h-14 sm:w-14">
      <span className="font-serif text-base font-bold text-white sm:text-lg">술</span>
    </div>
  )
}

function LoginHeroContent({ compact = false }: { compact?: boolean }) {
  return (
    <>
      <h1
        className={`font-serif font-bold leading-[1.35] tracking-tight text-white ${
          compact
            ? 'text-xl sm:text-2xl'
            : 'text-[1.75rem] xl:text-[2.25rem]'
        }`}
      >
        시간이 흐를수록 깊어지는
        <br />
        우리 고유의 맛과 향
      </h1>
      <p
        className={`leading-relaxed text-white/70 ${
          compact ? 'mt-3 text-xs sm:text-sm' : 'mt-6 text-sm xl:text-[0.9375rem]'
        }`}
      >
        가장 자연스럽고 편안한 맛과 향의 주류브랜드.
        전통 막걸리 브랜드 빛담에서 만나보세요.
      </p>
    </>
  )
}

function LoginHeroPanelDesktop() {
  return (
    <div className="relative hidden overflow-hidden min-[1000px]:sticky min-[1000px]:top-0 min-[1000px]:flex min-[1000px]:h-dvh min-[1000px]:w-1/2 min-[1000px]:shrink-0">
      <img
        src={LEFT_HERO_IMAGE}
        alt="전통 양조장 장독대"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-r from-black/65 via-black/40 to-black/20" />
      <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-black/10" />

      <div className="relative z-10 flex h-full w-full flex-col justify-between p-10 xl:p-16">
        <div className="max-w-lg pt-4">
          <LoginHeroContent />
        </div>
        <div className="flex items-center gap-2.5 pb-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gold/90">
            <span className="font-serif text-[11px] font-bold text-white">술</span>
          </div>
          <span className="font-serif text-base font-semibold text-white/90">빛담</span>
        </div>
      </div>
    </div>
  )
}

function LoginHeroPanelMobile() {
  return (
    <div className="relative min-[1000px]:hidden">
      <img
        src={LEFT_HERO_IMAGE}
        alt="전통 양조장 장독대"
        className="h-44 w-full object-cover sm:h-52"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-black/20" />
      <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6">
        <LoginHeroContent compact />
        <div className="mt-4 flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gold/90">
            <span className="font-serif text-[10px] font-bold text-white">술</span>
          </div>
          <span className="font-serif text-sm font-semibold text-white/90">빛담</span>
        </div>
      </div>
    </div>
  )
}

function SocialDivider() {
  return (
    <div className="relative my-6 sm:my-7">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-cream-dark" />
      </div>
      <div className="relative flex justify-center">
        <span className="bg-cream px-4 text-xs text-muted">간편 로그인</span>
      </div>
    </div>
  )
}

function LoginForm() {
  return (
    <div className="mx-auto w-full max-w-[400px] px-4 py-8 sm:px-6 sm:py-10 min-[1000px]:px-8 min-[1000px]:py-12">
      <div className="mb-8 flex flex-col items-center text-center sm:mb-10">
        <LoginBrandBadge />
        <h2 className="mt-5 font-serif text-xl font-bold leading-tight text-charcoal sm:mt-6 sm:text-[1.625rem]">
          반갑습니다, 빛담입니다
        </h2>
        <p className="mt-3 text-xs leading-relaxed text-muted sm:text-[0.8125rem]">
          본인인증 후 술추천 서비스를
          <br />
          한눈에 가이드받을 수 있습니다.
        </p>
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4 sm:gap-[1.125rem]">
        <div>
          <label htmlFor="email" className="mb-2 block text-xs font-medium text-charcoal">
            이메일 주소
          </label>
          <input
            id="email"
            type="email"
            placeholder="bitdam@example.com"
            className="w-full rounded-md border border-[#e8e0d8] bg-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted/45 focus:border-gold focus:ring-1 focus:ring-gold/30 sm:py-3.5"
          />
        </div>

        <div>
          <label htmlFor="password" className="mb-2 block text-xs font-medium text-charcoal">
            비밀번호
          </label>
          <input
            id="password"
            type="password"
            placeholder="••••••••••••"
            className="w-full rounded-md border border-[#e8e0d8] bg-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted/45 focus:border-gold focus:ring-1 focus:ring-gold/30 sm:py-3.5"
          />
        </div>

        <label className="flex cursor-pointer items-start gap-2.5 pt-0.5">
          <input
            type="checkbox"
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-[#d9d0c8] accent-gold"
          />
          <span className="text-xs leading-relaxed text-muted">
            로그인 시 이메일 저장, 약관 이용에 동의합니다.
          </span>
        </label>

        <button
          type="submit"
          className="mt-1 w-full rounded-md bg-gold py-3.5 text-sm font-medium text-white transition-colors hover:bg-gold-dark"
        >
          술추천 맞춤으로 로그인하기
        </button>
      </form>

      <SocialDivider />

      <div className="flex flex-col gap-2.5">
        <button
          type="button"
          className="w-full rounded-md bg-[#FEE500] py-3.5 text-sm font-medium text-[#191919] transition-opacity hover:opacity-90"
        >
          카카오톡으로 3초 만에 시작하기
        </button>

        <div className="grid grid-cols-2 gap-2.5">
          <button
            type="button"
            className="rounded-md bg-[#03C75A] py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            네이버 로그인
          </button>
          <button
            type="button"
            className="rounded-md bg-[#1A1C20] py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Apple 로그인
          </button>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-3 text-xs text-muted sm:mt-10">
        <a href="#" className="transition-colors hover:text-gold">
          회원 가입
        </a>
        <span className="text-[#ddd5cc]">|</span>
        <a href="#" className="transition-colors hover:text-gold">
          비밀번호 찾기
        </a>
      </div>

      <p className="mt-6 text-center min-[1000px]:hidden">
        <Link to="/" className="text-xs text-muted transition-colors hover:text-gold">
          ← 홈으로 돌아가기
        </Link>
      </p>
    </div>
  )
}

export default function Login() {
  return (
    <PageLayout className="bg-cream">
      <div className="flex min-h-dvh flex-col min-[1000px]:flex-row">
        <LoginHeroPanelMobile />
        <LoginHeroPanelDesktop />

        <div className="min-w-0 flex-1 bg-cream">
          <LoginForm />
          <InfiniteProductFeed
            title="로그인 전 미리보기 · 급상승 술"
            subtitle="스크롤하면 더 많은 상품을 불러옵니다"
            showHeader
            className="border-t border-cream-dark pt-0"
          />
          <InfiniteStoryFeed />
        </div>
      </div>
    </PageLayout>
  )
}
