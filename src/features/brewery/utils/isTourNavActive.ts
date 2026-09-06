export function isTourNavActive(pathname: string, to: string): boolean {
  if (to === '/tours') {
    return pathname === '/tours'
  }
  if (to === '/breweries') {
    return pathname === '/breweries' || pathname.startsWith('/breweries/')
  }
  return pathname === to
}
