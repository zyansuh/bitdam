export function formatUserHonorific(nickname: string): string {
  const name = nickname.trim()
  if (!name) {
    return '회원님'
  }

  return name.endsWith('님') ? name : `${name}님`
}
