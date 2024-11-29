import { useEffect, useState } from "react"

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [cursorImage, setCursorImage] = useState("src\\assets\\gafas-de-sol.png")

  useEffect(() => {
    console.log('effect: ', { enabled })

    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log('handleMove', { clientX, clientY })
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
      document.body.classList.toggle('no-cursor', enabled)
    }

    return () => {
      window.removeEventListener('pointermove', handleMove)
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])


  return (
    <>
      <img
        src={cursorImage}
        style={{
          display: `${enabled ? 'block' : 'none'}`,
          position: 'absolute',
          border: '1px solid #fff',
          borderRadius: '50%',
          pointerEvents: 'none',
          left: -32,
          top: -32,
          width: 64,
          height: 64,
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
      />
      <button onClick={() => { setEnabled(!enabled) }}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </>
  )
}

function App() {

  return (
    <>
      <FollowMouse />
    </>
  )
}

export default App
