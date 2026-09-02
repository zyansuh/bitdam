import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { getBreweryDetail } from '../utils/getBreweryDetail'

export function useBreweryDetail() {
  const { id } = useParams()

  return useMemo(() => getBreweryDetail(id ?? ''), [id])
}
