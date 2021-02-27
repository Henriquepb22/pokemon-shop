import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    icon?: JSX.Element
}

const Button = ({ children, icon, ...props }: ButtonProps) => (
    <S.Wrapper {...props}>
        {!!icon && icon}
        {!!children && <span>{children}</span>}
    </S.Wrapper>
)

export default Button
