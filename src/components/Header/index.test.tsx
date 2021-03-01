import { renderWithTheme } from 'utils/tests/helpers'
import userEvent from '@testing-library/user-event'
import { screen } from '@testing-library/react'

import {
    ShoppingCartContext,
    ShoppingCartProps,
} from 'contexts/ShoppingCartContext'
import productsMock from 'components/ProductCard/mock'
import Header from '.'

describe('<Header />', () => {
    it('should render the header with heading', () => {
        renderWithTheme(<Header />)

        expect(
            screen.getByRole('heading', { name: /pokémon shop/i })
        ).toBeInTheDocument()
        expect(screen.getByPlaceholderText(/pesquisar/i)).toBeInTheDocument()
        expect(
            screen.getByLabelText(/carrinho de compras/i)
        ).toBeInTheDocument()
    })

    it('should render items on cart quantity on header', () => {
        const value: ShoppingCartProps = {
            isOpen: true,
            totalValue: 250,
            products: productsMock.map((item) => {
                return {
                    ...item,
                    quantity: 1,
                }
            }),
            addProduct: jest.fn(),
            removeProduct: jest.fn(),
            closeCart: jest.fn(),
            openCart: jest.fn(),
        }
        renderWithTheme(
            <ShoppingCartContext.Provider value={value}>
                <Header />
            </ShoppingCartContext.Provider>
        )

        expect(
            screen.getByLabelText(/carrinho de compras/i)
        ).toBeInTheDocument()
        expect(screen.getByText(productsMock.length)).toBeInTheDocument()
    })

    it('should open the cart clicking on shopping cart icon', async () => {
        const value: ShoppingCartProps = {
            isOpen: false,
            totalValue: 250,
            products: [
                {
                    ...productsMock[0],
                    quantity: 1,
                },
            ],
            addProduct: jest.fn(),
            removeProduct: jest.fn(),
            closeCart: jest.fn(),
            openCart: jest.fn(),
        }
        renderWithTheme(
            <ShoppingCartContext.Provider value={value}>
                <Header />
            </ShoppingCartContext.Provider>
        )

        const button = screen.getByLabelText(/carrinho de compras/i)
        expect(button).toBeInTheDocument()
        userEvent.click(button)

        expect(value.openCart).toHaveBeenCalled()
    })
})
