import type { BrandStoryBlock } from '../types/brandStory'

interface BrandStoryBlocksProps {
  blocks: BrandStoryBlock[]
}

export default function BrandStoryBlocks({ blocks }: BrandStoryBlocksProps) {
  return (
    <div className="brand-story-blocks">
      {blocks.map((block, index) => {
        const key = `${block.type}-${index}`

        if (block.type === 'paragraph') {
          return (
            <p key={key} className="brand-story-blocks__p">
              {block.text}
            </p>
          )
        }

        if (block.type === 'emphasis') {
          return (
            <p key={key} className="brand-story-blocks__emphasis">
              {block.text}
            </p>
          )
        }

        if (block.type === 'quote') {
          return (
            <blockquote key={key} className="brand-story-blocks__quote">
              {block.text}
            </blockquote>
          )
        }

        if (block.type === 'scenes') {
          return (
            <ol key={key} className="brand-story-scenes">
              {block.items.map((item) => (
                <li key={item} className="brand-story-scenes__item">
                  {item}
                </li>
              ))}
            </ol>
          )
        }

        if (block.type === 'questions') {
          return (
            <ul key={key} className="brand-story-questions">
              {block.items.map((item) => (
                <li key={item} className="brand-story-questions__item">
                  {item}
                </li>
              ))}
            </ul>
          )
        }

        return (
          <ul key={key} className="brand-story-promises">
            {block.items.map((item) => (
              <li key={item} className="brand-story-promises__item">
                {item}
              </li>
            ))}
          </ul>
        )
      })}
    </div>
  )
}
