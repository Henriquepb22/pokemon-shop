import { renderWithTheme } from 'utils/tests/helpers'
import { screen } from '@testing-library/react'

import ProductCard from '.'
import productsMock from './mock'

describe('<ProductCard />', () => {
    it('should render the product card', () => {
        renderWithTheme(<ProductCard {...productsMock[0]} />)

        expect(screen.getByText(/charmander/i)).toBeInTheDocument()
        expect(screen.getByText(/r\$ 25,50/i)).toBeInTheDocument()
        expect(
            screen.getByRole('img', { name: /charmander/i })
        ).toBeInTheDocument()
    })
})
