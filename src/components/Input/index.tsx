import { InputHTMLAttributes } from 'react'

import * as S from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string
    labelFor?: string
    icon?: JSX.Element
}

const Input = ({ label, labelFor = '', icon, ...props }: InputProps) => (
    <S.Wrapper>
        {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
        {!!icon && icon}
        <S.Input {...props} />
    </S.Wrapper>
)

export default Input
