import React from 'react'
import waves from '../assets/images/shapes/waves.svg'

const Header = () => {
    return (
        <header>
            <img
                alt="React Waves"
                src={waves}
            />
        </header>
    )
}

export { Header as default }
