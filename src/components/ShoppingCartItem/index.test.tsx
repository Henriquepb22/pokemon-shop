import { renderWithTheme } from 'utils/tests/helpers'
import userEvent from '@testing-library/user-event'
import { screen } from '@testing-library/react'

import productsMock from 'components/ProductCard/mock'
import ShoppingCartItem from '.'

const product = {
    ...productsMock[0],
    quantity: 2,
}

describe('<ShoppingCartItem />', () => {
    it('should render shopping cart item correctly', () => {
        renderWithTheme(
            <ShoppingCartItem handleRemove={jest.fn()} {...product} />
        )

        expect(
            screen.getByRole('img', { name: /charmander/i })
        ).toBeInTheDocument()
        expect(screen.getByText(/r\$ 51,00/i)).toBeInTheDocument()
        expect(screen.getByText(/charmander/i)).toBeInTheDocument()
        expect(
            screen.getByRole('button', { name: /remover item/i })
        ).toBeInTheDocument()
    })

    it('should remove item from cart', () => {
        const handleRemove = jest.fn()
        renderWithTheme(
            <ShoppingCartItem handleRemove={handleRemove} {...product} />
        )

        const removeButton = screen.getByRole('button', {
            name: /remover item/i,
        })
        userEvent.click(removeButton)

        expect(handleRemove).toHaveBeenCalled()
        expect(handleRemove).toHaveBeenCalledWith(productsMock[0].id)
    })
})
