import { createGlobalStyle, css } from 'styled-components'
import media from 'styled-media-query'

type ShoppingCartThemeProps = {
    isOpen: boolean
}

export const ShoppingCartTheme = createGlobalStyle<ShoppingCartThemeProps>`
    ${({ isOpen }) =>
        isOpen &&
        css`
            ${media.lessThan('medium')`
                body {
                    overflow-y: hidden;
                    height: 100%;
                }
            `}
        `}
`
