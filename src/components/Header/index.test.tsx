import { screen, waitFor } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import userEvent from '@testing-library/user-event'

import {
    ShoppingCartContext,
    ShoppingCartProps,
} from 'contexts/ShoppingCartContext'
import productsMock from 'components/ProductCard/mock'
import Header from '.'

describe('<Header />', () => {
    it('should render the header with heading', () => {
        const findByName = jest.fn()
        renderWithTheme(<Header findByName={findByName} />)

        expect(
            screen.getByRole('heading', { name: /pokémon shop/i })
        ).toBeInTheDocument()
        expect(screen.getByPlaceholderText(/pesquisar/i)).toBeInTheDocument()
        expect(
            screen.getByLabelText(/carrinho de compras/i)
        ).toBeInTheDocument()
    })

    it('should render items on cart quantity on header', () => {
        const findByName = jest.fn()
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
                <Header findByName={findByName} />
            </ShoppingCartContext.Provider>
        )

        expect(
            screen.getByLabelText(/carrinho de compras/i)
        ).toBeInTheDocument()
        expect(screen.getByText(productsMock.length)).toBeInTheDocument()
    })

    it('should open the cart clicking on shopping cart icon', async () => {
        const findByName = jest.fn()
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
                <Header findByName={findByName} />
            </ShoppingCartContext.Provider>
        )

        const button = screen.getByLabelText(/carrinho de compras/i)
        expect(button).toBeInTheDocument()
        userEvent.click(button)

        expect(value.openCart).toHaveBeenCalled()
    })

    it('should find by name when typing on search bar', async () => {
        const findByName = jest.fn()
        renderWithTheme(<Header findByName={findByName} />)

        const searchBar = screen.getByPlaceholderText(/pesquisar/i)
        const text = 'blastoise'
        expect(searchBar).toBeInTheDocument()
        userEvent.type(searchBar, text)

        await waitFor(() => {
            expect(findByName).toHaveBeenCalledTimes(text.length)
            expect(findByName).toHaveBeenCalledWith(text)
        })
    })
})
