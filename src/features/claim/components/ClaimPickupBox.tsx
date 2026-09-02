interface ClaimPickupBoxProps {
  recipient: string
  phone: string
  address: string
}

export default function ClaimPickupBox({ recipient, phone, address }: ClaimPickupBoxProps) {
  return (
    <section className="claim-pickup">
      <h2 className="claim-section__title">수거지 주소 확인 (기본 배송지 자동 입력)</h2>
      <dl>
        <div>
          <dt>수령인</dt>
          <dd>{recipient}</dd>
        </div>
        <div>
          <dt>연락처</dt>
          <dd>{phone}</dd>
        </div>
        <div>
          <dt>주소</dt>
          <dd>{address}</dd>
        </div>
      </dl>
    </section>
  )
}
