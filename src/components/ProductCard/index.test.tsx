import { renderWithTheme } from 'utils/tests/helpers'
import { screen } from '@testing-library/react'

import ProductCard from '.'

const props = {
    id: 4,
    name: 'Charmander',
    price: 25.5,
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
}

describe('<ProductCard />', () => {
    it('should render the product card', () => {
        renderWithTheme(<ProductCard {...props} />)

        expect(screen.getByText(/charmander/i)).toBeInTheDocument()
        expect(screen.getByText(/r\$ 25,50/i)).toBeInTheDocument()
        expect(
            screen.getByRole('img', { name: /charmander/i })
        ).toBeInTheDocument()
    })
})
