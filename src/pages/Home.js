import React from 'react'
import { badges, logos } from '../data/constants'

const Home = () => {
    // Application name
    const name = 'React Boilerplate'

    return (
        <div className="flexbox-column home">
            <img
                alt="Application Logo"
                className="home__app-logo spin"
                src={logos.react.svg}
            />
            <h1 className="home__app-name">{name}</h1>
            <div className="flexbox-row home__badges">
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
