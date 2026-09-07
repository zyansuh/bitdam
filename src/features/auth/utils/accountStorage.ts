import type { EmailAccount } from '../types/account'
import { DEMO_STAFF_ACCOUNTS } from '../data/demoStaff'

const STORAGE_KEY = 'bitdam.auth.accounts'

function mergeDemoAccounts(accounts: EmailAccount[]): EmailAccount[] {
  const byEmail = new Map(accounts.map((account) => [account.email, account]))

  for (const demo of DEMO_STAFF_ACCOUNTS) {
    const existing = byEmail.get(demo.email)
    if (!existing) {
      byEmail.set(demo.email, demo)
      continue
    }

    byEmail.set(demo.email, {
      ...existing,
      workspaceRole: demo.workspaceRole,
      nickname: existing.nickname || demo.nickname,
    })
  }

  return [...byEmail.values()]
}

function readList(): EmailAccount[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    const parsed = raw ? (JSON.parse(raw) as EmailAccount[]) : []
    const list = Array.isArray(parsed) ? parsed : []
    const merged = mergeDemoAccounts(list)
    if (JSON.stringify(list) !== JSON.stringify(merged)) {
      writeList(merged)
    }
    return merged
  } catch {
    writeList(DEMO_STAFF_ACCOUNTS)
    return DEMO_STAFF_ACCOUNTS
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

export function updateAccountPassword(accountId: string, current: string, next: string): void {
  const accounts = readList()
  const index = accounts.findIndex((account) => account.id === accountId)
  if (index < 0) {
    throw new Error('이메일 계정을 찾을 수 없습니다.')
  }
  if (accounts[index].password !== current) {
    throw new Error('현재 비밀번호가 올바르지 않습니다.')
  }
  if (next.length < 8) {
    throw new Error('새 비밀번호는 8자 이상이어야 합니다.')
  }
  accounts[index] = { ...accounts[index], password: next }
  writeList(accounts)
}

export function deleteAccount(accountId: string): void {
  writeList(readList().filter((account) => account.id !== accountId))
}

export function updateAccountWorkshop(
  accountId: string,
  claim: { sellerId: string; sellerBizNo: string; sellerVerified: boolean; workspaceRole: 'seller' },
): void {
  const accounts = readList()
  const index = accounts.findIndex((account) => account.id === accountId)
  if (index < 0) return
  accounts[index] = { ...accounts[index], ...claim }
  writeList(accounts)
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
    workspaceRole: 'member',
  }
  writeList([...readList(), account])
  return account
}
