import ProductCard, { ProductCardProps } from 'components/ProductCard'

import * as S from './styles'

type ProductListProps = {
    products: ProductCardProps[]
}

const ProductList = ({ products }: ProductListProps) => (
    <S.Wrapper>
        {products.map((product) => (
            <ProductCard key={product.id} {...product} />
        ))}
    </S.Wrapper>
)

export default ProductList
