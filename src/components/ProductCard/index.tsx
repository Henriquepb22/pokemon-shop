import { memo } from 'react'
import { CartPlus } from '@styled-icons/fa-solid/CartPlus'
import { formatToCurrency } from 'utils/logic/helpers'
import Button from 'components/Button'

import * as S from './styles'

export type ProductCardProps = {
    id: number
    name: string
    price: number
    img: string
    onClick?: () => void
}

const ProductCard = ({ name, price, img, onClick }: ProductCardProps) => (
    <S.Wrapper>
        <S.ProductWrapper>
            <S.Image src={img} aria-label={name} />
            <S.ProductInfo>
                <S.ProductName>{name}</S.ProductName>
                <S.ProductPrice>{formatToCurrency(price)}</S.ProductPrice>
            </S.ProductInfo>
        </S.ProductWrapper>
        <Button
            aria-label="adicionar ao carrinho"
            icon={<CartPlus aria-hidden />}
            onClick={onClick}
        >
            Adicionar
        </Button>
    </S.Wrapper>
)

export default memo(ProductCard)
