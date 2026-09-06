interface CustomBottleProps {
  spiritId: string
}

const SHAPE: Record<string, string> = {
  soju: 'custom-bottle custom-bottle--soju',
  yakju: 'custom-bottle custom-bottle--yakju',
  fruit: 'custom-bottle custom-bottle--fruit',
}

export default function CustomBottle({ spiritId }: CustomBottleProps) {
  return (
    <div className={SHAPE[spiritId] ?? SHAPE.soju} aria-hidden>
      <span className="custom-bottle__lip" />
      <span className="custom-bottle__neck" />
      <span className="custom-bottle__shoulder" />
      <span className="custom-bottle__body" />
      <span className="custom-bottle__base" />
    </div>
  )
}
