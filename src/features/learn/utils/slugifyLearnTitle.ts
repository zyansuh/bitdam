export function slugifyLearnTitle(title: string): string {
  const compact = title
    .trim()
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-|-$/g, '')
  return compact ? `ai-${compact.slice(0, 48)}` : `ai-${Date.now()}`
}
