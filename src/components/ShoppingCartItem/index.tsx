import { formatToCurrency } from 'utils/logic/helpers'

import * as S from './styles'

type ShoppingCartItemProps = {
    name: string
    img: string
    quantity: number
    price: number
}

const ShoppingCartItem = ({
    name,
    img,
    quantity,
    price,
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
    </S.Wrapper>
)

export default ShoppingCartItem
