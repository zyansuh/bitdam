export type PolicyBlock =
  | { kind: 'p'; text: string }
  | { kind: 'lead'; text: string }
  | { kind: 'ol'; items: string[] }
  | { kind: 'ul'; items: string[] }
  | { kind: 'check'; text: string }
  | { kind: 'pair'; label: string; value: string }

export interface PolicyArticle {
  id: string
  title: string
  blocks: PolicyBlock[]
}

export interface PolicyChapter {
  id: string
  number: string
  title: string
  articles: PolicyArticle[]
}

export interface PolicyDocument {
  title: string
  version: string
  effectiveDate: string
  revisedDate: string
  intro?: string[]
  chapters: PolicyChapter[]
  company: PolicyPair[]
  addendum: string
}

export interface PolicyPair {
  label: string
  value: string
}
