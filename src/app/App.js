import React from 'react'
import Footer from '../layouts/Footer'
import Header from '../layouts/Header'
import Home from '../pages/Home'

const App = () => {
    return (
        <div className="fullscreen">
            <Header />
            <Home />
            <Footer />
        </div>
    )
}

export { App as default }
