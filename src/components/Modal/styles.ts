import styled, { css } from 'styled-components'

import * as Button from 'components/Button/styles'

type WrapperProps = {
    isOpen: boolean
}

export const Wrapper = styled.div<WrapperProps>`
    ${({ theme, isOpen }) => css`
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.2);
        z-index: ${theme.layers.modal};

        ${isOpen
            ? css`
                  animation: fadeIn 0.5s linear forwards;

                  @keyframes fadeIn {
                      0% {
                          opacity: 0;
                      }
                      100% {
                          opacity: 1;
                      }
                  }
              `
            : css`
                  animation: fadeOut 0.5s linear forwards;
                  pointer-events: none;

                  @keyframes fadeOut {
                      0% {
                          opacity: 1;
                      }
                      100% {
                          opacity: 0;
                      }
                  }
              `}
    `}
`

export const Modal = styled.div`
    ${({ theme }) => css`
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 400px;
        height: auto;
        background-color: ${theme.colors.white};
        padding: calc(${theme.spacings.xlarge} * 3);
        border: 1.6rem solid ${theme.colors.secondary};
        border-style: dashed;
        z-index: ${theme.layers.modal};

        ${Button.Wrapper} {
            color: ${theme.colors.black};
            width: 3rem;
            height: 3rem;
            position: absolute;
            top: 20px;
            right: 20px;
            padding: 0;
        }
    `}
`

export const Title = styled.h3`
    ${({ theme }) => css`
        color: ${theme.colors.secondary};
        font-size: ${theme.fonts.sizes.xxlarge};
        margin: ${theme.spacings.xlarge} 0;
        text-align: center;
    `}
`

export const Message = styled.p`
    ${({ theme }) => css`
        color: ${theme.colors.primary};
        font-size: ${theme.fonts.sizes.xlarge};
        margin: ${theme.spacings.xlarge} 0;
        text-align: center;
    `}
`

export const CloseOverlay = styled.button`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: transparent;
    border: 0;
    width: 100%;
`
