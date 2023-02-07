import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from '../Header'

describe('Header', () => {
    it('should be rendered correctly.', () => {
        const { container } = render(<Header />)
        expect(container).toMatchSnapshot()
    })

    it('should have the correct background image.', () => {
        render(<Header />)
        const img = screen.getByRole('img')
        expect(img).toHaveAttribute('alt', 'Waves')
        expect(img).toHaveAttribute('src', 'waves.svg')
    })
})
