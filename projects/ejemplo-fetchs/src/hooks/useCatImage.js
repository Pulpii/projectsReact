import { useState, useEffect } from 'react'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    if (!fact) return
    const firstThreeWord = fact.split(' ', 3).join(' ')
    fetch(`${CAT_PREFIX_IMAGE_URL + '/cat/says/'}${firstThreeWord}?fontSize=50&fontColor=green&json=true`)
      .then(res => res.json())
      .then(data => {
        const { _id } = data
        const url = `/cat/${_id}/says/${firstThreeWord}`
        setImageUrl(url)
      })
  }, [fact])

  return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
}
