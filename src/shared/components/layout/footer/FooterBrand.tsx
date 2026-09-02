import BrandLogo from '../../brand/BrandLogo'

export default function FooterBrand() {
  return (
    <div className="footer__brand">
      <div className="footer__brand-row">
        <BrandLogo size="md" nameTone="light" />
      </div>
      <p className="footer__copy">
        전국 양조장의 장인 정신을 담은
        <br />
        프리미엄 전통주 플랫폼
      </p>
    </div>
  )
}
