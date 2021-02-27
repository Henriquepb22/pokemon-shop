import { renderWithTheme } from 'utils/tests/helpers'
import { screen } from '@testing-library/react'

import Header from '.'

describe('<Header />', () => {
    it('should render the header with heading', () => {
        renderWithTheme(<Header />)

        expect(
            screen.getByRole('heading', { name: /pokémon shop/i })
        ).toBeInTheDocument()
    })
})
