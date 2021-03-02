import { memo } from 'react'
import { formatToCurrency } from 'utils/logic/helpers'
import { Times } from '@styled-icons/fa-solid/Times'

import * as S from './styles'

type ShoppingCartItemProps = {
    id: number
    name: string
    img: string
    quantity: number
    price: number
    handleRemove: (id: number) => void
}

const ShoppingCartItem = ({
    id,
    name,
    img,
    quantity,
    price,
    handleRemove,
}: ShoppingCartItemProps) => (
    <S.Wrapper>
        <S.CartProductInfo>
            <S.CartProductImage src={img} alt={name} />
            <S.CartProductName>
                <span>{`${quantity} x `}</span>
                {name}
            </S.CartProductName>
        </S.CartProductInfo>
        <S.CartProductPrice>
            {formatToCurrency(quantity * price)}
        </S.CartProductPrice>
        <S.RemoveButton
            aria-label="remover item do carrinho"
            title="Remover item"
            type="button"
            onClick={() => handleRemove(id)}
        >
            <Times />
        </S.RemoveButton>
    </S.Wrapper>
)

export default memo(ShoppingCartItem)
