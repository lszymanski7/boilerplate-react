import React from 'react'
import { render } from '@testing-library/react'
import App from '../App'

describe('App', () => {
    it('should be rendered correctly.', () => {
        const component = render(<App />)
        expect(component).toMatchSnapshot()
    })
})
