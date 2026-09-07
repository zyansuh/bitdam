const KEY = 'bitdam.cms.grants'

export type CmsGrantMap = Record<string, string[]>

export function readCmsGrants(): CmsGrantMap {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return {}
    const parsed = JSON.parse(raw) as CmsGrantMap
    return parsed && typeof parsed === 'object' ? parsed : {}
  } catch {
    return {}
  }
}

export function writeCmsGrants(map: CmsGrantMap): void {
  localStorage.setItem(KEY, JSON.stringify(map))
}

export function grantsForAccount(accountId: string): string[] {
  return readCmsGrants()[accountId] ?? []
}

export function setAccountGrant(accountId: string, documentId: string, enabled: boolean): void {
  const map = readCmsGrants()
  const current = new Set(map[accountId] ?? [])
  if (enabled) current.add(documentId)
  else current.delete(documentId)
  map[accountId] = [...current]
  writeCmsGrants(map)
}
