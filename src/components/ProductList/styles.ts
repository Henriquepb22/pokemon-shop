import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
    ${({ theme }) => css`
        display: grid;
        grid-gap: ${theme.spacings.large};
        grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));

        > * {
            justify-self: center;
        }
    `}
`
