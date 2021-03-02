import { BrowserRouter as Router } from 'react-router-dom'
import { renderWithTheme } from 'utils/tests/helpers'
import { screen } from '@testing-library/react'

import Home from '.'

describe('<Home />', () => {
    it('should render the home page', () => {
        renderWithTheme(
            <Router>
                <Home type="fire" />
            </Router>
        )

        expect(
            screen.getByRole('heading', { name: /pokémon shop/i })
        ).toBeInTheDocument()
        expect(screen.getByPlaceholderText(/pesquisar/i)).toBeInTheDocument()
    })
})
