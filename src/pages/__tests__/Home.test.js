import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../Home'

describe('Home', () => {
    it('should be rendered correctly.', () => {
        const { container } = render(<Home />)
        expect(container).toMatchSnapshot()
    })

    it('should have the correct application logo.', () => {
        render(<Home />)
        const logo = screen.getByAltText('Application Logo')
        expect(logo).toHaveAttribute('src', 'react.svg')
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
        expect(badges[0]).toHaveAttribute(
            'src',
            'https://img.shields.io/badge/GitHub-555555?style=for-the-badge&logo=github'
        )
        expect(badges[1]).toHaveAttribute(
            'src',
            'https://img.shields.io/badge/1.0.0-blue?style=for-the-badge&label=Version&labelColor=555555'
        )
        expect(badges[2]).toHaveAttribute(
            'src',
            'https://img.shields.io/github/repo-size/lszymanski7/boilerplate-react?style=for-the-badge&label=Size&labelColor=555555'
        )
        expect(badges[3]).toHaveAttribute(
            'src',
            'https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge&label=License&labelColor=555555'
        )
        expect(badges[4]).toHaveAttribute(
            'src',
            'https://img.shields.io/github/forks/lszymanski7/boilerplate-react?style=for-the-badge&color=green&label=Forks&labelColor=555555'
        )
        expect(badges[5]).toHaveAttribute(
            'src',
            'https://img.shields.io/github/stars/lszymanski7/boilerplate-react?style=for-the-badge&color=green&label=Stars&labelColor=555555'
        )
    })

    it('should have links with the correct href attribute.', () => {
        render(<Home />)
        const links = screen.getAllByRole('link')
        expect(links[0]).toHaveAttribute(
            'href', 
            'https://github.com/lszymanski7/boilerplate-react'
        )
        expect(links[1]).toHaveAttribute(
            'href',
            'https://github.com/lszymanski7/boilerplate-react/blob/main/LICENSE.md'
        )
    })
})
