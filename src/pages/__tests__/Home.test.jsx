import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../Home'
import { BADGES } from '../../data/constants'

describe('Home', () => {
    it('should be rendered correctly.', () => {
        const { container } = render(<Home />)
        expect(container).toMatchSnapshot()
    })

    it('should have the correct application logo.', () => {
        render(<Home />)
        const img = screen.getAllByRole('img')[0]
        expect(img).toHaveAttribute('alt', 'Application Logo')
        expect(img).toHaveAttribute('src', 'react.svg')
    })

    it('should have the correct application name.', () => {
        render(<Home />)
        const name = 'React Boilerplate'
        const h1 = screen.getByRole('heading', { level: 1 })
        expect(h1).toHaveTextContent(name)
    })

    it('should have six badges.', () => {
        render(<Home />)
        const badges = screen.getAllByAltText('Badge', { exact: false })
        expect(badges).toHaveLength(6)
    })

    it('should have badges with the correct src attribute.', () => {
        render(<Home />)
        const badges = screen.getAllByAltText('Badge', { exact: false })
        expect(badges[0]).toHaveAttribute('src', BADGES.github)
        expect(badges[1]).toHaveAttribute('src', BADGES.version)
        expect(badges[2]).toHaveAttribute('src', BADGES.size)
        expect(badges[3]).toHaveAttribute('src', BADGES.license)
        expect(badges[4]).toHaveAttribute('src', BADGES.forks)
        expect(badges[5]).toHaveAttribute('src', BADGES.stars)
    })

    it('should have two links.', () => {
        render(<Home />)
        const links = screen.getAllByRole('link')
        expect(links).toHaveLength(2)
    })

    it('should have links with the correct href attribute.', () => {
        render(<Home />)
        const links = screen.getAllByRole('link')
        expect(links[0]).toHaveAttribute('href', 'https://github.com/lszymanski7/boilerplate-react')
        expect(links[1]).toHaveAttribute('href', 'https://github.com/lszymanski7/boilerplate-react/blob/main/LICENSE.md')
    })
})
