import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as ProductList from 'components/ProductList/styles'
import * as Button from 'components/Button/styles'

export const Wrapper = styled.section`
    ${({ theme }) => css`
        margin-top: calc(${theme.grid.header.normal} + ${theme.spacings.large});
        position: relative;
        margin-bottom: ${theme.spacings.xlarge};

        ${media.lessThan('medium')`
            margin-top: 0;
            ${ProductList.Wrapper} {
                margin-top: ${theme.spacings.xlarge};
            }
        `}
    `}
`

export const LoadMoreContainer = styled.div`
    ${({ theme }) => css`
        display: flex;
        justify-content: center;
        margin: calc(${theme.spacings.xlarge} * 2) auto 5rem;

        ${Button.Wrapper} {
            width: 20rem;
            height: 4rem;
            border-radius: ${theme.radius.medium};
            background-color: ${theme.colors.primary};
        }
    `}
`
