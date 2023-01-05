import React from 'react'
import { shapes } from '../data/constants'

const Header = () => {
    return (
        <header className="header">
            <img
                alt="Waves"
                src={shapes.waves}
            />
        </header>
    )
}

export { Header as default }
