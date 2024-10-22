import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
    ${({ theme }) => css`
        display: flex;
        width: 100%;
        padding: 0 ${theme.spacings.medium};
        background-color: ${theme.colors.white};
        border-radius: ${theme.radius.medium};

        & > svg {
            color: ${theme.colors.secondary};
            width: 2rem;
            margin-right: ${theme.spacings.medium};
        }

        &:focus-within {
            box-shadow: 0 0 0.8rem ${theme.colors.white};
        }
    `}
`

export const Label = styled.label`
    ${({ theme }) => css`
        color: ${theme.colors.white};
    `}
`

export const Input = styled.input`
    ${({ theme }) => css`
        background-color: transparent;
        border: 0;
        font-size: ${theme.fonts.sizes.large};
        padding: ${theme.spacings.medium} 0;
        height: 100%;
        width: 100%;

        &:focus {
            outline: 0;
        }

        ${media.lessThan('medium')`
            width: 100%;
        `}
    `}
`
