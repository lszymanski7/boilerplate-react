const BADGES = {
    github: 'https://img.shields.io/badge/GitHub-555555?style=for-the-badge&logo=github',
    version: 'https://img.shields.io/badge/1.0.0-blue?style=for-the-badge&label=Version&labelColor=555555',
    size: 'https://img.shields.io/github/repo-size/lszymanski7/boilerplate-react?style=for-the-badge&label=Size&labelColor=555555',
    license: 'https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge&label=License&labelColor=555555',
    forks: 'https://img.shields.io/github/forks/lszymanski7/boilerplate-react?style=for-the-badge&color=green&label=Forks&labelColor=555555',
    stars: 'https://img.shields.io/github/stars/lszymanski7/boilerplate-react?style=for-the-badge&color=green&label=Stars&labelColor=555555'
}

const LOGOS = {
    github: require('../assets/images/logos/github.svg'),
    react: {
        size_128x128: require('../assets/images/logos/react-128x128.png'),
        size_256x256: require('../assets/images/logos/react-256x256.png'),
        size_512x512: require('../assets/images/logos/react-512x512.png'),
        svg: require('../assets/images/logos/react.svg')
    }
}

const SHAPES = {
    waves: require('../assets/images/shapes/waves.svg')
}

export { BADGES, LOGOS, SHAPES }
