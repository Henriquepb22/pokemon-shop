import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as Button from 'components/Button/styles'

type WrapperProps = {
    isOpen: boolean
    animationFinished: boolean
}

export const Wrapper = styled.div<WrapperProps>`
    ${({ theme, isOpen, animationFinished }) => css`
        display: flex;
        flex-direction: column;
        padding: ${theme.spacings.large};
        background-color: ${theme.colors.lightGrey};
        position: fixed;
        top: 7rem;
        width: 40rem;
        height: calc(100vh - 7rem);
        overflow-y: auto;
        z-index: ${theme.layers.overlay};

        ${Button.Wrapper} {
            &:first-child {
                padding: 0;
                width: 2.8rem;
                > svg {
                    width: 2.8rem;
                    color: ${theme.colors.black};
                }
            }
        }

        ${animationFinished &&
        css`
            display: none;
            visibility: hidden;
        `}

        ${isOpen
            ? css`
                  animation: slideIn 0.4s ease-in forwards;
                  @keyframes slideIn {
                      0% {
                          right: -40rem;
                      }
                      100% {
                          right: 0rem;
                      }
                  }
              `
            : css`
                  animation: slideOut 0.4s ease-in forwards;
                  @keyframes slideOut {
                      0% {
                          right: 0rem;
                      }
                      100% {
                          right: -40rem;
                      }
                  }
              `}

              ${media.lessThan('medium')`
                    top: 0;
                    width: 100vw;
                    height: 100vh;

                    ${
                        isOpen
                            ? css`
                                  animation: slideIn 0.4s ease-in forwards;
                                  @keyframes slideIn {
                                      0% {
                                          right: -100vw;
                                      }
                                      100% {
                                          right: 0rem;
                                      }
                                  }
                              `
                            : css`
                                  animation: slideOut 0.4s ease-in forwards;
                                  @keyframes slideOut {
                                      0% {
                                          right: 0rem;
                                      }
                                      100% {
                                          right: -100vw;
                                      }
                                  }
                              `
                    }
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
