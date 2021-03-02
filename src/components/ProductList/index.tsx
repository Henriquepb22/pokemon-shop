import { useContext, memo } from 'react'
import ProductCard, { ProductCardProps } from 'components/ProductCard'
import { ShoppingCartContext } from 'contexts/ShoppingCartContext'
import Loader from './Loader'

import * as S from './styles'

type ProductListProps = {
    products: ProductCardProps[]
    isLoading?: boolean
}

const ProductList = ({ products, isLoading = false }: ProductListProps) => {
    const { addProduct } = useContext(ShoppingCartContext)

    return (
        <S.Wrapper>
            {isLoading ? (
                <Loader />
            ) : (
                products.map((product) => (
                    <ProductCard
                        key={product.id}
                        onClick={() => addProduct(product)}
                        {...product}
                    />
                ))
            )}
        </S.Wrapper>
    )
}

export default memo(ProductList)
