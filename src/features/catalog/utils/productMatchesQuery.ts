import type { Product } from '../../../data/products'

function normalize(value: string): string {
  return value.normalize('NFC').toLowerCase().replace(/[#·,]/g, ' ')
}

function tokensOf(query: string): string[] {
  return normalize(query)
    .split(/\s+/)
    .map((token) => token.trim())
    .filter((token) => token.length > 0)
}

function haystack(product: Product): string {
  return normalize(
    [
      product.name,
      product.brewery,
      product.region,
      product.regionGroup,
      product.category,
      product.tagline,
      product.story,
      product.tasteTags.join(' '),
      product.awards.join(' '),
      String(product.abv),
      String(product.volumeMl),
      String(product.price),
    ].join(' '),
  )
}

export function productMatchesQuery(product: Product, query: string): boolean {
  const tokens = tokensOf(query)
  if (tokens.length === 0) return true
  const text = haystack(product)
  return tokens.every((token) => {
    if (/^\d+$/.test(token)) {
      const n = Number(token)
      return product.abv === n || product.volumeMl === n || product.price === n || text.includes(token)
    }
    return text.includes(token)
  })
}
