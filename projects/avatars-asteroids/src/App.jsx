import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import { Asteroid } from './components/Asteroid'

function App() {
  const [gameEnabled, setGameEnabled] = useState(false)
  const [galaxySize, setGalaxySize] = useState({ width: 800, heigth: 680 })
  const [asteroids, setAsteroids] = useState([])


  useEffect(() => {
    const asteroidsList = [
      { id: 1, enabled: gameEnabled, imgPath: null, galaxySize: galaxySize },
      { id: 2, enabled: gameEnabled, imgPath: null, galaxySize: galaxySize },
      { id: 3, enabled: gameEnabled, imgPath: null, galaxySize: galaxySize },
      { id: 4, enabled: gameEnabled, imgPath: null, galaxySize: galaxySize }
    ]

    setAsteroids(asteroidsList)

    return () => {
      setAsteroids([])
    }
  }, [gameEnabled, galaxySize])

  return (
    <main>
      <h1>Avatar Asteroids</h1>
      <button onClick={() => { setGameEnabled(!gameEnabled) }}>
        {gameEnabled ? 'Apagar' : 'Encender'}
      </button>
      <div id='galaxy'>
        {asteroids.map((a, index) => {
          return (
            <Asteroid key={index} enabled={gameEnabled} imgPath={null} galaxySize={galaxySize} />
          )
        })}

      </div>
    </main>
  )
}

export default App
