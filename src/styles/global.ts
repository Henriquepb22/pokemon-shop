import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        &::before, &::after {
            box-sizing: inherit;
        }
    }

    ${({ theme }) => css`
        html {
            font-size: 62.5%;
        }

        body {
            font-family: 'Open Sans', sans-serif;
            font-size: ${theme.fonts.sizes.medium};
        }
    `}
`
