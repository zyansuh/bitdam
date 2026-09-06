import { useMemo, useState } from 'react'
import { getTourDateStrip } from '../utils/tourDateStrip'

export function useTourReservation(unitPrice: number) {
  const dates = useMemo(() => getTourDateStrip(), [])
  const [dateKey, setDateKey] = useState(dates[0]?.key ?? '')
  const [time, setTime] = useState('13:30')
  const [guests, setGuests] = useState(2)
  const [submitted, setSubmitted] = useState(false)

  const total = unitPrice * guests

  function addGuest() {
    setGuests((prev) => Math.min(8, prev + 1))
    setSubmitted(false)
  }

  function removeGuest() {
    setGuests((prev) => Math.max(1, prev - 1))
    setSubmitted(false)
  }

  function chooseDate(key: string) {
    setDateKey(key)
    setSubmitted(false)
  }

  function chooseTime(slot: string) {
    setTime(slot)
    setSubmitted(false)
  }

  function submit() {
    if (!dateKey || !time) return
    setSubmitted(true)
  }

  return {
    dates,
    dateKey,
    time,
    guests,
    total,
    submitted,
    chooseDate,
    chooseTime,
    addGuest,
    removeGuest,
    submit,
  }
}
