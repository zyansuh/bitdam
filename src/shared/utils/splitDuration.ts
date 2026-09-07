import type { CountdownParts } from '../types/countdown'

export function pad2(value: number): string {
  return String(value).padStart(2, '0')
}

export function splitDuration(totalMs: number): CountdownParts {
  const safe = Math.max(0, totalMs)
  const sec = Math.floor(safe / 1000)
  return {
    days: Math.floor(sec / 86400),
    hours: Math.floor((sec % 86400) / 3600),
    minutes: Math.floor((sec % 3600) / 60),
    seconds: sec % 60,
    totalMs: safe,
    expired: safe <= 0,
  }
}
