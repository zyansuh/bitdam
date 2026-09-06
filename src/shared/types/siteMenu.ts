export interface SiteMenuLinkItem {
  label: string
  to: string
  note?: string
}

export interface SiteMenuCluster {
  id: string
  label: string
  items: SiteMenuLinkItem[]
}

export interface SiteMenuBranch {
  id: string
  label: string
  to?: string
  items: SiteMenuLinkItem[]
  clusters: SiteMenuCluster[]
}
