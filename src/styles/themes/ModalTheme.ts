import { createGlobalStyle, css } from 'styled-components'

type ModalThemeProps = {
    isOpen: boolean
}

export const ModalTheme = createGlobalStyle<ModalThemeProps>`
    ${({ isOpen }) =>
        isOpen &&
        css`
            body {
                overflow-y: hidden;
                height: 100%;
            }
        `}
`
