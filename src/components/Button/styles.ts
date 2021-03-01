import styled, { css } from 'styled-components'
import { ButtonProps } from '.'

export const Wrapper = styled.button<Pick<ButtonProps, 'onlyIcon'>>`
    ${({ theme, onlyIcon }) => css`
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: ${theme.spacings.medium};
        border: 2px solid ${theme.colors.grey};
        background-color: ${theme.colors.secondary};
        transition: box-shadow ${theme.transition.fast};
        font-family: inherit;
        font-size: ${theme.fonts.sizes.medium};
        font-weight: ${theme.fonts.bold};
        color: ${theme.colors.white};
        border-bottom-left-radius: ${theme.radius.small};
        border-bottom-right-radius: ${theme.radius.small};
        position: relative;
        z-index: ${theme.layers.base};

        & > svg {
            width: 2rem;
            color: inherit;
            margin-right: ${theme.spacings.medium};
        }

        &:hover,
        &:focus {
            cursor: pointer;
            box-shadow: 0 0 0.8rem ${theme.colors.secondary};
        }

        &:disabled {
            opacity: 0.7;
            pointer-events: none;
        }

        ${!!onlyIcon &&
        css`
            background-color: transparent;
            border: 0;
            width: 6rem;

            &:hover,
            &:focus {
                box-shadow: none;
            }

            & > svg {
                width: 3rem;
                margin-right: 0;
            }
        `}
    `}
`

export const Badge = styled.span`
    ${({ theme }) => css`
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        right: 0;
        bottom: 0;
        background-color: ${theme.colors.secondary};
    `}
`
