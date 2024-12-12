import { useCatImage } from '../hooks/useCatImage'

export function ImageCat () {
  const [imageUrl] = useCatImage({ fact: 'cat' })

  return (
    <>
      {imageUrl && <img src={imageUrl} alt='A cat image randomized by a fact' />}
    </>
  )
}
