import React from 'react'
import { SHAPES } from '../data/constants'

const Header = () => {
    return (
        <header className="header">
            <img
                alt="Waves"
                src={SHAPES.waves}
            />
        </header>
    )
}

export { Header as default }
