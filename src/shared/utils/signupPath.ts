export function buildSignupPath(returnTo: string): string {
  if (!returnTo || returnTo === '/') {
    return '/signup'
  }

  return `/signup?from=${encodeURIComponent(returnTo)}`
}
