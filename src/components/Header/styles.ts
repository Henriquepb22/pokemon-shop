import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { Container as BaseContainer } from 'components/Container'

export const Wrapper = styled.header`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        height: ${theme.grid.header.normal};
        width: 100%;
        background-color: ${theme.colors.primary};
        z-index: ${theme.layers.header};

        ${media.lessThan('medium')`
            position: static;
            height: ${theme.grid.header.large};
            padding: 0 ${theme.spacings.large};
        `}
    `}
`

export const Container = styled(BaseContainer)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 130rem;

    ${media.lessThan('medium')`
            width: 100%;
            flex-direction: column;
            padding-left: 0;
            padding-right: 0;

            > button {
                align-self: flex-end;
            }
        `}
`

export const Title = styled.h1`
    ${({ theme }) => css`
        margin-right: ${theme.spacings.xlarge};
        font-size: ${theme.fonts.sizes.xxlarge};
        color: ${theme.colors.white};
        white-space: nowrap;
        text-transform: capitalize;
        cursor: default;

        ${media.lessThan('medium')`
            font-size: ${theme.fonts.sizes.xlarge};
            margin-bottom: ${theme.spacings.xsmall};
            margin-right: 0;
        `}
    `}
`

export const LogoImage = styled.img`
    ${({ theme }) => css`
        display: inline-block;
        width: 4rem;
        height: 4rem;
        margin-right: ${theme.spacings.small};
    `}
`
