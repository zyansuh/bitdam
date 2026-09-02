import type { PolicyBlock } from '../types/policy'

interface PolicyBlocksProps {
  blocks: PolicyBlock[]
}

export default function PolicyBlocks({ blocks }: PolicyBlocksProps) {
  return (
    <div className="policy-blocks">
      {blocks.map((block, index) => {
        const key = `${block.kind}-${index}`

        if (block.kind === 'p') {
          return (
            <p key={key} className="policy-blocks__p">
              {block.text}
            </p>
          )
        }

        if (block.kind === 'lead') {
          return (
            <p key={key} className="policy-blocks__lead">
              {block.text}
            </p>
          )
        }

        if (block.kind === 'ol') {
          return (
            <ol key={key} className="policy-blocks__ol">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          )
        }

        if (block.kind === 'ul') {
          return (
            <ul key={key} className="policy-blocks__ul">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )
        }

        if (block.kind === 'pair') {
          return (
            <div key={key} className="policy-blocks__pair">
              <span className="policy-blocks__pair-label">{block.label}</span>
              <span>{block.value}</span>
            </div>
          )
        }

        return (
          <p key={key} className="policy-blocks__check">
            <span className="policy-blocks__checkbox" aria-hidden />
            {block.text}
          </p>
        )
      })}
    </div>
  )
}
