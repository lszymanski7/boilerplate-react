import React from 'react'
import logo from '../utils/constants'

const Boilerplate = () => {
    return (
        <div className="container">
            <img
                className="container__logo"
                src={logo.size_256x256}
                alt="React Boilerplate"
            />
            <h1 className="container__title">React Boilerplate</h1>
        </div>
    )
}

export { Boilerplate as default }
