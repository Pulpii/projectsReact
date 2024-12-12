import { useState, useEffect } from "react"

export const Asteroid = ({ imgPath, enabled, galaxySize }) => {
    const [alive, setAlive] = useState(enabled)
    const [startPosition, setStartPosition] = useState({ x: null, y: null })

    useEffect(() => {
        createStartPosition()
    })

    useEffect(() => {
        setAlive(enabled);

        return () => {
            setStartPosition({ x: null, y: null })
        }
    }, [enabled]);


    const createStartPosition = () => {
        let xPos = Math.floor(Math.random() * (galaxySize.width + 1));
        let yPos = Math.floor(Math.random() * (galaxySize.height + 1));

        setStartPosition({ x: xPos, y: yPos })
    }

    return (
        <>
            {alive &&
                <img
                    src={imgPath}
                    style={{
                        display: `${alive ? 'block' : 'none'}`,
                        position: 'relative',
                        backgroundColor: '#ffffff',
                        border: '1px solid #fff',
                        borderRadius: '50%',
                        pointerEvents: 'none',
                        left: -32,
                        top: -32,
                        width: 64,
                        height: 64,
                        transform: `translate(${startPosition.x}px, ${startPosition.y}px)`
                    }}
                />}
        </>
    )
}