import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.header`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: center;
        height: 7rem;
        background-color: ${theme.colors.primary};
        padding: 0 ${theme.spacings.xlarge};

        ${media.lessThan('medium')`
            flex-direction: column;
            height: 10rem;
        `}
    `}
`

export const Title = styled.h1`
    ${({ theme }) => css`
        margin: 0 ${theme.spacings.large};
        font-size: ${theme.fonts.sizes.xxlarge};
        color: ${theme.colors.white};
        white-space: nowrap;
        text-transform: capitalize;

        ${media.lessThan('medium')`
            margin-bottom: ${theme.spacings.xsmall};
        `}
    `}
`
