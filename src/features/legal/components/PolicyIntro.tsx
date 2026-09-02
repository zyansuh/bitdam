interface PolicyIntroProps {
  paragraphs: string[]
}

export default function PolicyIntro({ paragraphs }: PolicyIntroProps) {
  return (
    <div className="policy-intro">
      {paragraphs.map((text) => (
        <p key={text} className="policy-blocks__p">
          {text}
        </p>
      ))}
    </div>
  )
}
