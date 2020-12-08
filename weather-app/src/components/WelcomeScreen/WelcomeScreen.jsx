import React, { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Clouds from 'vanta/dist/vanta.clouds.min'
import * as THREE from 'three'

const WelcomeScreen = ({ children }) => {
    const myRefDiv = useRef(null)
    console.log('myRefDiv.current: ', myRefDiv.current)

    const [vanta, setVanta] = useState(0) //Se inicializa el hook en 0

    useEffect(() => {
        console.log('myRefDiv.current (useEffect): ', myRefDiv.current)

        // vanta === 0, es igual a vanta == false
        //vanta == false, es igual a !vanta
        if (!vanta) {
            // SOLO PASA UNA VEZ 
            setVanta(Clouds({
                THREE,
                el: myRefDiv.current
            })) //vanata = 1

            console.log('vanta diferente de 0')
        }

        // Detiene el efecto y desasocia todos los recursos (div + vanta effect)
        return () => {
            if (vanta) {
                vanta.destroy()
                console.log('libero recursos')
            }
        }

    }, [vanta])

    return (
        <div className='full' ref={myRefDiv}>
            {children}
        </div>
    )
}

WelcomeScreen.propTypes = {
    children: PropTypes.node
}

export default WelcomeScreen
