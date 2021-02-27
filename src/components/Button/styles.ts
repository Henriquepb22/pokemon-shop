import styled, { css } from 'styled-components'

export const Wrapper = styled.button`
    ${({ theme }) => css`
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
    `}
`
