import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/facts'

export function useCatFact () {
  const [fact, setFact] = useState()

  const getFactAndUpdateState = () => {
    const newFact = getRandomFact()
    return setFact(newFact)
  }

  useEffect(getFactAndUpdateState, [])

  return { fact, getFactAndUpdateState }
}
