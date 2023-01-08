import React from 'react'
import { BADGES, LOGOS } from '../data/constants'

const Home = () => {
    // Application name
    const name = 'React Boilerplate'

    return (
        <div className="flexbox-column home">
            <img
                alt="Application Logo"
                className="home__app-logo spin"
                src={LOGOS.react.svg}
            />
            <h1 className="home__app-name">{name}</h1>
            <div className="flexbox-row home__badges">
                <a href="https://github.com/lszymanski7/boilerplate-react">
                    <img
                        alt="GitHub Badge"
                        src={BADGES.github}
                    />
                </a>
                <img
                    alt="Version Badge"
                    src={BADGES.version}
                />
                <img
                    alt="Size Badge"
                    src={BADGES.size}
                />
                <a href="https://github.com/lszymanski7/boilerplate-react/blob/main/LICENSE.md">
                    <img
                        alt="License Badge"
                        src={BADGES.license}
                    />
                </a>
                <img
                    alt="Forks Badge"
                    src={BADGES.forks}
                />
                <img
                    alt="Stars Badge"
                    src={BADGES.stars}
                />
            </div>
        </div>
    )
}

export { Home as default }
