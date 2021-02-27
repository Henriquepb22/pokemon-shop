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
        expect(container.firstChild).toMatchInlineSnapshot(`
            .c0 {
              max-width: 130rem;
              margin-left: 0;
              margin-right: 0;
            }

            <div
              class="c0"
            >
              <span>
                Pokémon SHOP
              </span>
            </div>
        `)
    })
})
