import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
    ${({ theme }) => css`
        display: flex;
        justify-content: space-between;
        align-items: center;

        &:not(:first-child) {
            border-top: 1px solid ${theme.colors.secondary};
        }
    `}
`

export const CartProductImage = styled.img`
    display: inline-block;
    height: 10rem;
    width: 10rem;

    ${media.lessThan('medium')`
        height: 8rem;
        width: 8rem;
    `}
`

export const CartProductInfo = styled.div`
    display: flex;
    align-items: center;
`

export const CartProductName = styled.p`
    ${({ theme }) => css`
        font-size: ${theme.fonts.sizes.medium};
        font-weight: ${theme.fonts.normal};
        text-transform: capitalize;

        > span {
            text-transform: none;
        }
    `}
`

export const CartProductPrice = styled.p`
    ${({ theme }) => css`
        font-size: ${theme.fonts.sizes.large};
        font-weight: ${theme.fonts.bold};

        ${media.lessThan('medium')`
         font-size: ${theme.fonts.sizes.medium};
        `}
    `}
`
