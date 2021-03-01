import { renderWithTheme } from 'utils/tests/helpers'
import userEvent from '@testing-library/user-event'
import { screen } from '@testing-library/dom'

import {
    ShoppingCartProps,
    ShoppingCartContext,
} from 'contexts/ShoppingCartContext'
import productsMock from 'components/ProductCard/mock'
import ProductList from '.'

describe('<ProductList />', () => {
    it('should render the product list', () => {
        const { container } = renderWithTheme(
            <ProductList products={productsMock} />
        )

        expect(container.firstChild?.childNodes).toHaveLength(
            productsMock.length
        )
    })

    it('should add an product to the cart', () => {
        const addProduct = jest.fn()
        const value: ShoppingCartProps = {
            totalValue: 250,
            isOpen: true,
            products: productsMock.map((item) => {
                return {
                    ...item,
                    quantity: 1,
                }
            }),
            addProduct,
            removeProduct: jest.fn(),
            closeCart: jest.fn(),
            openCart: jest.fn(),
        }
        renderWithTheme(
            <ShoppingCartContext.Provider value={value}>
                <ProductList products={[productsMock[0]]} />
            </ShoppingCartContext.Provider>
        )

        const button = screen.getByRole('button', { name: /adicionar/i })

        expect(button).toBeInTheDocument()
        userEvent.click(button)

        expect(addProduct).toHaveBeenCalledTimes(1)
        expect(addProduct).toHaveBeenCalledWith(productsMock[0])
    })
})
