export function normalizeBizNo(value: string): string {
  const digits = value.replace(/\D/g, '')
  if (digits.length !== 10) return digits
  return `${digits.slice(0, 3)}-${digits.slice(3, 5)}-${digits.slice(5)}`
}

export function bizNoDigits(value: string): string {
  return value.replace(/\D/g, '')
}
