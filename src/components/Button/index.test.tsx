import { ShoppingCart } from '@styled-icons/fa-solid/ShoppingCart'
import { renderWithTheme } from 'utils/tests/helpers'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Button from '.'

describe('<Button />', () => {
    it('should render the button', () => {
        renderWithTheme(<Button>Add to cart</Button>)

        expect(
            screen.getByRole('button', { name: /add to cart/i })
        ).toBeInTheDocument()
    })

    it('should render button with icon', () => {
        renderWithTheme(
            <Button icon={<ShoppingCart data-testid="icon" />}>
                Add to cart
            </Button>
        )

        expect(
            screen.getByRole('button', { name: /add to cart/i })
        ).toBeInTheDocument()
        expect(screen.getByTestId('icon')).toBeInTheDocument()
    })

    it('should execute onclick function', () => {
        const onClick = jest.fn()
        renderWithTheme(<Button onClick={onClick}>Add to cart</Button>)

        const button = screen.getByRole('button', { name: /add to cart/i })
        userEvent.click(button)

        expect(onClick).toHaveBeenCalled()
    })
})
