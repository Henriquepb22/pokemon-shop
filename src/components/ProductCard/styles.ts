import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        width: 20rem;
        border: 2px solid ${theme.colors.grey};
        border-radius: ${theme.radius.small};
        transition: box-shadow ${theme.transition.fast};

        &:hover {
            box-shadow: 4px 4px 0.4rem ${theme.colors.secondary};
        }
    `}
`

export const ProductWrapper = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        padding: ${theme.spacings.large};
    `}
`

export const Image = styled.img`
    height: 100%;
    width: 100%;
`

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
`

export const ProductName = styled.h2`
    ${({ theme }) => css`
        font-size: ${theme.fonts.sizes.medium};
        font-weight: ${theme.fonts.normal};
        text-transform: capitalize;
    `}
`

export const ProductPrice = styled.span`
    ${({ theme }) => css`
        margin-top: ${theme.spacings.xsmall};
        font-size: ${theme.fonts.sizes.large};
        font-weight: ${theme.fonts.bold};
    `}
`
