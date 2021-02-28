import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    icon?: JSX.Element
    onlyIcon?: boolean
    badge?: string
}

const Button = ({
    children,
    icon,
    onlyIcon = false,
    badge,
    ...props
}: ButtonProps) => (
    <S.Wrapper onlyIcon={onlyIcon} {...props}>
        {!!icon && icon}
        {!!children && <span>{children}</span>}
        {!!badge && <S.Badge>{badge}</S.Badge>}
    </S.Wrapper>
)

export default Button
