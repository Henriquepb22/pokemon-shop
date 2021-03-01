import { useContext, useState, useEffect } from 'react'
import { ArrowLeft } from '@styled-icons/fa-solid/ArrowLeft'
import { ShoppingCartContext } from 'contexts/ShoppingCartContext'
import { formatToCurrency } from 'utils/logic/helpers'
import ShoppingCartItem from 'components/ShoppingCartItem'
import Button from 'components/Button'

import * as S from './styles'

const ShoppingCart = () => {
    const { products, totalValue, isOpen, closeCart } = useContext(
        ShoppingCartContext
    )
    const [animationFinished, setAnimationFinished] = useState(true)

    useEffect(() => {
        if (isOpen) {
            setAnimationFinished(false)
        } else {
            const closeAnimation = setTimeout(() => {
                setAnimationFinished(true)
            }, 400)

            return () => clearTimeout(closeAnimation)
        }
    }, [isOpen])

    return (
        <S.Wrapper
            isOpen={isOpen}
            animationFinished={animationFinished}
            aria-hidden={!isOpen}
        >
            <Button
                onlyIcon
                icon={<ArrowLeft aria-label="Fechar carrinho" />}
                onClick={closeCart}
                type="button"
            />
            <S.CartHeader>
                <S.CartTitle>Meu carrinho</S.CartTitle>
                <S.CartDescription>
                    (
                    {products.length === 1
                        ? `${products.length} item`
                        : `${products.length} itens`}
                    )
                </S.CartDescription>
            </S.CartHeader>
            <S.CartProducts>
                {products.length ? (
                    products.map((product) => (
                        <ShoppingCartItem key={product.id} {...product} />
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
