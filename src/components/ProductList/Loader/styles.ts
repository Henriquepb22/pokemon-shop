import styled, { css } from 'styled-components'

export const Loader = styled.div`
    ${({ theme }) => css`
        width: 20rem;
        height: 30rem;
        border-radius: ${theme.radius.medium};
        background: #f6f7f8;
        background-image: linear-gradient(
            to right,
            #f6f7f8 0%,
            #edeef1 20%,
            #f6f7f8 40%,
            #f6f7f8 100%
        );
        background-size: 80rem 14rem;
        animation: shimmer 2s linear infinite forwards;

        @keyframes shimmer {
            0% {
                background-position: -40rem 0;
            }
            100% {
                background-position: 40rem 0;
            }
        }
    `}
`
