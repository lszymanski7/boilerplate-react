import React from 'react'
import { badge } from '../data/constants'
import logo from '../assets/images/logos/react.svg'

const Home = () => {
    return (
        <div className="home-container">
            <img
                alt="React Logo"
                className="home-logo spin"
                src={logo}
            />
            <h1 className="home-title">React Boilerplate</h1>
            <div className="home-badges">
                <a href="https://github.com/lszymanski7/boilerplate-react">
                    <img
                        alt="GitHub Badge"
                        src={badge.github}
                    />
                </a>
                <img
                    alt="Version Badge"
                    src={badge.version}
                />
                <img
                    alt="Size Badge"
                    src={badge.size}
                />
                <a href="https://github.com/lszymanski7/boilerplate-react/blob/main/LICENSE.md">
                    <img
                        alt="License Badge"
                        src={badge.license}
                    />
                </a>
                <img
                    alt="Forks Badge"
                    src={badge.forks}
                />
                <img
                    alt="Stars Badge"
                    src={badge.stars}
                />
            </div>
        </div>
    )
}

export { Home as default }
