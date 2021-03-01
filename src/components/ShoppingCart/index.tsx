import { useContext } from 'react'
import { ShoppingCartContext } from 'contexts/ShoppingCartContext'
import { formatToCurrency } from 'utils/logic/helpers'
import Button from 'components/Button'

import * as S from './styles'

const ShoppingCart = () => {
    const { products, totalValue, isOpen } = useContext(ShoppingCartContext)

    return (
        <S.Wrapper isOpen={isOpen} aria-hidden={!isOpen}>
            <S.CartHeader>
                <S.CartTitle>Meu carrinho</S.CartTitle>
                <S.CartDescription>
                    (
                    {products.length === 1
                        ? `${products.length} item`
                        : `${products.length} items`}
                    )
                </S.CartDescription>
            </S.CartHeader>
            <S.CartProducts>
                {products.length ? (
                    products.map(({ id, img, name, price, quantity }) => (
                        <S.CartProduct key={id}>
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
                        </S.CartProduct>
                    ))
                ) : (
                    <span>Seu carrinho está vazio</span>
                )}
            </S.CartProducts>
            <S.CartCheckout>
                <S.TotalContainer>
                    <S.TotalTitle>Total:</S.TotalTitle>
                    <S.TotalValue>{formatToCurrency(totalValue)}</S.TotalValue>
                </S.TotalContainer>
                <Button type="button" disabled={!products.length}>
                    Finalizar
                </Button>
            </S.CartCheckout>
        </S.Wrapper>
    )
}

export default ShoppingCart
