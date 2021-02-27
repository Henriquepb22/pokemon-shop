import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
    ${({ theme }) => css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 6rem;
        background-color: ${theme.colors.black};
    `}
`

export const Title = styled.h1`
    ${({ theme }) => css`
        margin-left: ${theme.spacings.large};
        font-size: ${theme.fonts.sizes.xxlarge};
        color: ${theme.colors.white};
    `}
`
