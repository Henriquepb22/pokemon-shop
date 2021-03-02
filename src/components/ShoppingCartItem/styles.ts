import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
    ${({ theme }) => css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;

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
        font-weight: ${theme.fonts.bold};
        text-transform: capitalize;

        > span {
            text-transform: none;
        }
    `}
`

export const CartProductPrice = styled.p`
    ${({ theme }) => css`
        font-size: ${theme.fonts.sizes.large};

        ${media.lessThan('medium')`
         font-size: ${theme.fonts.sizes.medium};
        `}
    `}
`

export const RemoveButton = styled.button`
    ${({ theme }) => css`
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${theme.colors.danger};
        height: 2rem;
        width: 2rem;
        border-radius: 50%;
        border: 0;
        right: 0;
        top: 10px;

        > svg {
            width: 1rem;
            color: ${theme.colors.white};
        }

        &:hover {
            cursor: pointer;
        }
    `}
`
