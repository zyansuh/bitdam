import { useState } from 'react'

export function useSubscribeFaq() {
  const [open, setOpen] = useState<number | null>(0)

  function toggle(index: number) {
    setOpen((prev) => (prev === index ? null : index))
  }

  return { open, toggle }
}
