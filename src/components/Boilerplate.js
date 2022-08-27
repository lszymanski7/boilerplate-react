import React from 'react'
import logo from '../utils/constants'

const Boilerplate = () => {
    return (
        <div className="container">
            <img
                className="img-logo"
                src={logo.size_256x256}
                alt="React Logo"
            />
            <h1 className="text-white">React Boilerplate</h1>
        </div>
    )
}

export { Boilerplate as default }
