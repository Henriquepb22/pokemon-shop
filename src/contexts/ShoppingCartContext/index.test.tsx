import { useContext } from 'react'
import { renderWithTheme } from 'utils/tests/helpers'
import userEvent from '@testing-library/user-event'
import { screen } from '@testing-library/dom'

import productsMock from 'components/ProductCard/mock'
import ShoppingCartProvider, { ShoppingCartContext } from '.'

describe('<ShoppingCartContext />', () => {
    it('should open and close the shopping cart', async () => {
        const TestElement = () => {
            const { openCart, closeCart, isOpen } = useContext(
                ShoppingCartContext
            )

            return (
                <div>
                    <button onClick={openCart} type="button">
                        open cart
                    </button>
                    <button onClick={closeCart} type="button">
                        close cart
                    </button>
                    <p>open: {isOpen.toString()}</p>
                </div>
            )
        }

        renderWithTheme(
            <ShoppingCartProvider>
                <TestElement />
            </ShoppingCartProvider>
        )

        const openButton = screen.getByRole('button', { name: /open cart/i })
        const closeButton = screen.getByRole('button', { name: /close cart/i })
        expect(screen.getByText(/open: false/i)).toBeInTheDocument()

        userEvent.click(openButton)
        expect(screen.getByText(/open: true/i)).toBeInTheDocument()

        userEvent.click(closeButton)
        expect(screen.getByText(/open: false/i)).toBeInTheDocument()
    })

    it('should add and remove products from the cart', async () => {
        const product = {
            ...productsMock[0],
            quantity: 1,
        }

        const TestElement = () => {
            const { addProduct, removeProduct, products } = useContext(
                ShoppingCartContext
            )

            return (
                <div>
                    <button onClick={() => addProduct(product)} type="button">
                        add to cart
                    </button>
                    <div>
                        {products.map(({ id, name, price, quantity, img }) => (
                            <div key={id}>
                                <p>{name}</p>
                                <p>{price}</p>
                                <p data-testid="quantity">{quantity}</p>
                                <img src={img} alt={name} />
                                <button onClick={() => removeProduct(id)}>
                                    remove from cart
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )
        }

        const { container } = renderWithTheme(
            <ShoppingCartProvider>
                <TestElement />
            </ShoppingCartProvider>
        )

        // Add item
        const addButton = screen.getByRole('button', { name: /add to cart/i })
        userEvent.click(addButton)

        expect(container.firstChild?.childNodes[1].childNodes).toHaveLength(1)
        expect(screen.getByText(/charmander/i)).toBeInTheDocument()
        expect(screen.getByText(/25.5/i)).toBeInTheDocument()
        expect(screen.getByTestId(/quantity/i).innerHTML).toBe('1')
        expect(
            screen.getByRole('img', { name: /charmander/i })
        ).toBeInTheDocument()

        userEvent.click(addButton)
        expect(screen.getByTestId(/quantity/i).innerHTML).toBe('2')

        // Remove item
        const removeButton = screen.getByRole('button', {
            name: /remove from cart/i,
        })
        userEvent.click(removeButton)

        expect(screen.queryByText(/charmander/i)).not.toBeInTheDocument()
        expect(screen.queryByText(/25.5/i)).not.toBeInTheDocument()
        expect(
            screen.queryByRole('img', { name: /charmander/i })
        ).not.toBeInTheDocument()
    })
})
