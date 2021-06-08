import React from'react'
import Particles from 'react-particles-js';
import particlesConfig from './config/Particle-config'

function Particlebackground() {
    return (
        <div>
            <Particles params={particlesConfig}></Particles>
        </div>
    )
}

export default Particlebackground;