import { renderWithTheme } from 'utils/tests/helpers'
import { screen } from '@testing-library/react'

import {
    ShoppingCartContext,
    ShoppingCartProps,
} from 'contexts/ShoppingCartContext'
import productsMock from 'components/ProductCard/mock'
import ShoppingCart from '.'

describe('<ShoppingCart />', () => {
    it('should render the shopping cart without items', () => {
        const value: ShoppingCartProps = {
            totalValue: 250,
            isOpen: true,
            products: [],
            addProduct: jest.fn(),
            removeProduct: jest.fn(),
            closeCart: jest.fn(),
            openCart: jest.fn(),
        }

        renderWithTheme(
            <ShoppingCartContext.Provider value={value}>
                <ShoppingCart />
            </ShoppingCartContext.Provider>
        )

        expect(
            screen.getByRole('heading', { name: /carrinho/i })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('heading', { name: /total/i })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('button', { name: /finalizar/i })
        ).toBeInTheDocument()
        expect(screen.getByText(/0 itens/i)).toBeInTheDocument()
    })

    it('should render shopping cart with items and total', () => {
        const value: ShoppingCartProps = {
            totalValue: 250,
            isOpen: true,
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

        const { container } = renderWithTheme(
            <ShoppingCartContext.Provider value={value}>
                <ShoppingCart />
            </ShoppingCartContext.Provider>
        )

        expect(screen.getByText(/r\$ 250,00/i)).toBeInTheDocument()
        expect(container.firstChild?.childNodes[2].childNodes).toHaveLength(
            productsMock.length
        )
    })

    it('should render correct label with one item on cart', () => {
        const value: ShoppingCartProps = {
            totalValue: 250,
            isOpen: true,
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
                <ShoppingCart />
            </ShoppingCartContext.Provider>
        )

        expect(screen.getByText(/(1 item)/i)).toBeInTheDocument()
    })
})
