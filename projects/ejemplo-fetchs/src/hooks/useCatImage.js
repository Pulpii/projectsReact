import { useState, useEffect } from 'react'

export function useCatImage ({ fact }) {
  const CAT_PREFIX_URL = 'https://cataas.com/cat/says/'

  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ')[0]
    fetch(`${CAT_PREFIX_URL}${firstWord}?fontSize=50&fontColor=red&json=true`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Error en la request')
        }
        res.json()
      })
      .then(data => {
        const { url } = data
        setImageUrl(url)
      })
  }, [fact])

  return { imageUrl: `${CAT_PREFIX_URL}${imageUrl}` }
}
