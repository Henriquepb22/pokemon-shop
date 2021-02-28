import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { Container as BaseContainer } from 'components/Container'

export const Wrapper = styled.header`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        height: 7rem;
        background-color: ${theme.colors.primary};

        ${media.lessThan('medium')`
            height: 14rem;
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

        ${media.lessThan('medium')`
            font-size: ${theme.fonts.sizes.xlarge};
            margin-bottom: ${theme.spacings.xsmall};
        `}
    `}
`
