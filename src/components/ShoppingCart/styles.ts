import styled, { css } from 'styled-components'

type WrapperProps = {
    isOpen: boolean
}

export const Wrapper = styled.div<WrapperProps>`
    ${({ theme, isOpen }) => css`
        flex-direction: column;
        padding: ${theme.spacings.large};
        background-color: ${theme.colors.lightGrey};
        position: fixed;
        top: 7rem;
        width: 40rem;
        height: calc(100vh - 7rem);
        overflow-y: auto;
        z-index: ${theme.layers.overlay};

        ${isOpen
            ? css`
                  display: flex;
                  right: 0;
              `
            : css`
                  display: none;
                  right: -40rem;
              `}
    `}
`

export const CartHeader = styled.div`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        border-bottom: 2px solid ${theme.colors.primary};
        margin-bottom: ${theme.spacings.xlarge};
    `}
`

export const CartTitle = styled.h2`
    ${({ theme }) => css`
        font-size: ${theme.fonts.sizes.xxlarge};
        font-weight: ${theme.fonts.bold};
    `}
`

export const CartDescription = styled.span`
    ${({ theme }) => css`
        font-size: ${theme.fonts.sizes.medium};
        font-weight: ${theme.fonts.light};
        margin-left: ${theme.spacings.small};
    `}
`

export const CartProducts = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        padding-bottom: ${theme.spacings.medium};
    `}
`

export const CartProduct = styled.div`
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
    `}
`

export const CartCheckout = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        margin-top: auto;
        padding-top: ${theme.spacings.large};
        border-top: 2px solid ${theme.colors.secondary};
    `}
`

export const TotalContainer = styled.div`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        font-weight: ${theme.fonts.bold};
        justify-content: space-between;
        margin-bottom: ${theme.spacings.xlarge};
    `}
`

export const TotalTitle = styled.h3`
    ${({ theme }) => css`
        font-size: ${theme.fonts.sizes.xlarge};
        text-transform: uppercase;
    `}
`

export const TotalValue = styled.p`
    ${({ theme }) => css`
        font-size: ${theme.fonts.sizes.xxlarge};
    `}
`
