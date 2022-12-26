import React from 'react'
import { badges, logos } from '../data/constants'

const Home = () => {
    return (
        <div className="flexbox-column home-container">
            <img
                alt="React Logo"
                className="home-container__logo spin"
                src={logos.react.svg}
            />
            <h1 className="home-container__title">React Boilerplate</h1>
            <div className="flexbox-row home-container__badges">
                <a href="https://github.com/lszymanski7/boilerplate-react">
                    <img
                        alt="GitHub Badge"
                        src={badges.github}
                    />
                </a>
                <img
                    alt="Version Badge"
                    src={badges.version}
                />
                <img
                    alt="Size Badge"
                    src={badges.size}
                />
                <a href="https://github.com/lszymanski7/boilerplate-react/blob/main/LICENSE.md">
                    <img
                        alt="License Badge"
                        src={badges.license}
                    />
                </a>
                <img
                    alt="Forks Badge"
                    src={badges.forks}
                />
                <img
                    alt="Stars Badge"
                    src={badges.stars}
                />
            </div>
        </div>
    )
}

export { Home as default }
