import React from 'react'
import { render, screen } from '@testing-library/react'
import Boilerplate from '../../components/Boilerplate'

describe('Boilerplate', () => {
	it('should be rendered correctly.', () => {
		const component = render(<Boilerplate />)
		expect(component).toMatchSnapshot()
	})

	it('should have the correct title.', () => {
		render(<Boilerplate />)
		const title = 'React Boilerplate'
		const h1 = screen.getByRole('heading', { level: 1 })
		expect(h1).toHaveTextContent(title)
	})

	it('should have the correct logo.', () => {
		render(<Boilerplate />)
		const logo = screen.getByRole('img')
		expect(logo).toHaveAttribute('src', 'logo256-basic.png')
		expect(logo).toHaveAttribute('alt', 'React Boilerplate')
		expect(logo).toBeInTheDocument()
	})
})
