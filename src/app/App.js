import React from 'react'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import Home from '../pages/Home'

const App = () => {
    return (
        <div className="flexbox-fullscreen">
            <Header />
            <Home />
            <Footer />
        </div>
    )
}

export { App as default }
