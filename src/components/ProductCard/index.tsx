import { formatToCurrency } from 'utils/logic/helpers'

import * as S from './styles'

type ProductCardProps = {
    id: number
    name: string
    price: number
    img: string
}

const ProductCard = ({ name, price, img }: ProductCardProps) => (
    <S.Wrapper>
        <S.ProductWrapper>
            <S.Image src={img} aria-label={name} />
            <S.ProductInfo>
                <S.ProductName>{name}</S.ProductName>
                <S.ProductPrice>{formatToCurrency(price)}</S.ProductPrice>
            </S.ProductInfo>
        </S.ProductWrapper>
    </S.Wrapper>
)

export default ProductCard
