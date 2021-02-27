import { renderWithTheme } from 'utils/tests/helpers'

import { Container } from '.'

describe('<Container />', () => {
    it('should render the container', () => {
        const { container } = renderWithTheme(
            <Container>
                <span>Pokémon SHOP</span>
            </Container>
        )

        expect(container.firstChild).toHaveStyleRule('max-width', '130rem')
    })
})
