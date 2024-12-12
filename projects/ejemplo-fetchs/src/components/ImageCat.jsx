import { useCatImage } from '../hooks/useCatImage'
import { useEffect } from 'react'
import { useCatFact } from '../hooks/useCatFact'

export function ImageCat () {
  const [fact, getFactAndUpdateState] = useCatFact()
  const [imageUrl] = useCatImage({ fact })

  useEffect(() => {
    getFactAndUpdateState()
  }, [])

  return (
    <>
      {imageUrl && <img src={imageUrl} alt='A cat image randomized by a fact' />}
    </>
  )
}
