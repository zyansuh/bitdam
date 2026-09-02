import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { isSafeReturnPath, readLoginReturnPath, saveLoginReturnPath } from '../utils/loginReturnPath'

export function useLoginReturnPath(): string {
  const [searchParams] = useSearchParams()
  const from = searchParams.get('from')

  useEffect(() => {
    if (from) saveLoginReturnPath(from)
  }, [from])

  if (from && isSafeReturnPath(from)) return from
  return readLoginReturnPath()
}
