import { useEffect, useState, useContext, useCallback } from 'react'
import { getPokemonByType, getPokemonByUrl } from 'api/requests/pokemon'
import { ChevronDown } from '@styled-icons/fa-solid/ChevronDown'
import { ProductCardProps } from 'components/ProductCard'
import { ShopContext } from 'contexts/ShopContext'
import ShoppingCart from 'components/ShoppingCart'
import { Container } from 'components/Container'
import ProductList from 'components/ProductList'
import { useParams } from 'react-router'
import Button from 'components/Button'
import Header from 'components/Header'

import * as S from './styles'

type RouteParams = {
    type: 'fire' | 'water' | 'dragon'
}

const Home = () => {
    const { type } = useParams<RouteParams>()
    const { changeTheme, selectedShop } = useContext(ShopContext)
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState<ProductCardProps[]>([])
    const [filteredProducts, setFilteredProducts] = useState<
        ProductCardProps[]
    >([])
    const [pageSize, setPageSize] = useState(20)
    const hasMoreToFetch = pageSize < products.length

    useEffect(() => {
        changeTheme(type)
    }, [type, changeTheme])

    useEffect(() => {
        const fetchPokemonByType = async () => {
            setLoading(true)
            try {
                const { pokemon: pokemonByTypes } = await getPokemonByType(type)

                const pokeUrls = pokemonByTypes.map(
                    ({ pokemon: { url } }) => url
                )

                pokeUrls.forEach(async (url) => {
                    const {
                        id,
                        name,
                        sprites,
                        base_experience,
                        weight,
                    } = await getPokemonByUrl(url)
                    setProducts((oldProducts) => [
                        ...oldProducts,
                        {
                            id,
                            name,
                            img: sprites.front_default,
                            price: (base_experience * weight) / 100,
                        },
                    ])
                })
            } catch (error) {
                throw new Error(error)
            }
            setLoading(false)
        }
        fetchPokemonByType()
    }, [type])

    const loadMore = () => setPageSize((oldPageSize) => oldPageSize + 20)

    const findByName = useCallback(
        (name: string) => {
            if (name.trim().length >= 1) {
                const productsFilteredByName = products.filter((item) =>
                    item.name.toLowerCase().includes(name.toLowerCase())
                )
                setFilteredProducts(productsFilteredByName.slice(0, pageSize))
            } else {
                setFilteredProducts([])
            }
        },
        [products, pageSize]
    )

    return (
        <S.Wrapper>
            <Header
                title={`${selectedShop.name} Pokémon Shop`}
                findByName={findByName}
                logoImage={selectedShop.logo}
                logoAlt={selectedShop.name}
            />
            <ShoppingCart />
            <Container>
                <ProductList
                    products={
                        filteredProducts.length
                            ? filteredProducts
                            : products.slice(0, pageSize)
                    }
                />
                {hasMoreToFetch && !filteredProducts.length && (
                    <S.LoadMoreContainer>
                        <Button
                            icon={<ChevronDown />}
                            type="button"
                            onClick={loadMore}
                            disabled={loading}
                        >
                            Carregar mais
                        </Button>
                    </S.LoadMoreContainer>
                )}
            </Container>
        </S.Wrapper>
    )
}

export default Home
