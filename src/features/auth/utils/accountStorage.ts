import type { EmailAccount } from '../types/account'

const STORAGE_KEY = 'bitdam.auth.accounts'

function readList(): EmailAccount[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as EmailAccount[]
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function writeList(accounts: EmailAccount[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(accounts))
}

export function findAccountByEmail(email: string): EmailAccount | undefined {
  const normalized = email.trim().toLowerCase()
  return readList().find((account) => account.email === normalized)
}

export function matchAccount(email: string, password: string): EmailAccount | undefined {
  const account = findAccountByEmail(email)
  if (!account || account.password !== password) return undefined
  return account
}

export function createAccount(input: { email: string; password: string; nickname: string }): EmailAccount {
  const email = input.email.trim().toLowerCase()
  if (findAccountByEmail(email)) {
    throw new Error('이미 가입된 이메일입니다.')
  }

  const account: EmailAccount = {
    id: `email-${crypto.randomUUID()}`,
    email,
    password: input.password,
    nickname: input.nickname.trim(),
  }
  writeList([...readList(), account])
  return account
}
