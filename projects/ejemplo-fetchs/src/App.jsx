import { useState } from 'react'
import { ImageCat } from './components/ImageCat'

export function AppGatitos () {
  const [cats, setCats] = useState([])

  //   const [cats1, setCats1] = useState([<ImageCat key={1} />, <ImageCat key={2} />])

  //   const addNewRandomCat = () => {
  //     setCats([...cats, <ImageCat />])
  //   }

  return (
    <main>
      <h1>App de Gatitos</h1>
      {/* <button onClick={addNewRandomCat}>MIAU</button> */}

      <section>
        <ImageCat />
        {/* {cats1.map((cat, index) => {
          return (
            <div key={index}>
              {cat}
            </div>
          )
        })} */}
      </section>
    </main>
  )
}
