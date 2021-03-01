import { useContext } from 'react'
import ProductCard, { ProductCardProps } from 'components/ProductCard'
import { ShoppingCartContext } from 'contexts/ShoppingCartContext'

import * as S from './styles'

type ProductListProps = {
    products: ProductCardProps[]
}

const ProductList = ({ products }: ProductListProps) => {
    const { addProduct } = useContext(ShoppingCartContext)

    return (
        <S.Wrapper>
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    onClick={() => addProduct(product)}
                    {...product}
                />
            ))}
        </S.Wrapper>
    )
}

export default ProductList
