import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from '../Header'

describe('Header', () => {
    it('should be rendered correctly.', () => {
        const component = render(<Header />)
        expect(component).toMatchSnapshot()
    })

    it('should have waves as a background.', () => {
        render(<Header />)
        const waves = screen.getByRole('img')
        expect(waves).toHaveAttribute('alt', 'React Waves')
        expect(waves).toHaveAttribute('src', 'waves.svg')
    })
})