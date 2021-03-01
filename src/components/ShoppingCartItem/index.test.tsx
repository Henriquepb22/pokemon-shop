import { renderWithTheme } from 'utils/tests/helpers'
import { screen } from '@testing-library/react'

import productsMock from 'components/ProductCard/mock'
import ShoppingCartItem from '.'

const product = {
    ...productsMock[0],
    quantity: 2,
}

describe('<ShoppingCartItem />', () => {
    it('should render shopping cart item correctly', () => {
        renderWithTheme(<ShoppingCartItem {...product} />)

        expect(
            screen.getByRole('img', { name: /charmander/i })
        ).toBeInTheDocument()
        expect(screen.getByText(/r\$ 51,00/i)).toBeInTheDocument()
        expect(screen.getByText(/charmander/i)).toBeInTheDocument()
    })
})
