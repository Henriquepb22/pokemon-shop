import { useEffect, useState, useContext, useCallback } from 'react'
import { getPokemonByType, getPokemonByUrl } from 'api/requests/pokemon'
import { ChevronDown } from '@styled-icons/fa-solid/ChevronDown'
import { ProductCardProps } from 'components/ProductCard'
import { ModalContext } from 'contexts/ModalContext'
import { ShopContext } from 'contexts/ShopContext'
import ShoppingCart from 'components/ShoppingCart'
import { Redirect, useParams } from 'react-router'
import { Container } from 'components/Container'
import ProductList from 'components/ProductList'
import { toast } from 'react-toastify'
import Button from 'components/Button'
import Header from 'components/Header'

import * as S from './styles'

type RouteParams = {
    type: 'fire' | 'water' | 'dragon'
}

const Home = () => {
    const { type } = useParams<RouteParams>()
    const { changeTheme, selectedShop } = useContext(ShopContext)
    const { isOpen } = useContext(ModalContext)
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState<ProductCardProps[]>([])
    const [filteredProducts, setFilteredProducts] = useState<
        ProductCardProps[]
    >([])
    const [pageSize, setPageSize] = useState(20)
    const [redirect, setRedirect] = useState(false)
    const hasMoreToFetch = pageSize < products.length

    useEffect(() => {
        if (type !== 'fire' && type !== 'water' && type !== 'dragon') {
            setRedirect(true)
        }
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
                const pokeProducts: ProductCardProps[] = []
                await Promise.all(
                    pokeUrls.map(async (url) => {
                        const {
                            id,
                            name,
                            sprites,
                            base_experience,
                            weight,
                        } = await getPokemonByUrl(url)
                        pokeProducts.push({
                            id,
                            name,
                            img: sprites.front_default,
                            price: (base_experience * weight) / 100,
                        })
                    })
                )

                setProducts(pokeProducts)
            } catch (error) {
                toast.error(
                    error.response?.data.message ||
                        'Ocorreu um erro, tente novamente'
                )
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
        <S.Wrapper aria-disabled={isOpen}>
            <Header
                title={`${selectedShop.name} Pokémon Shop`}
                findByName={findByName}
                logoImage={selectedShop.logo}
                logoAlt={selectedShop.name}
            />
            <ShoppingCart />
            <Container>
                <ProductList
                    isLoading={loading}
                    products={
                        filteredProducts.length
                            ? filteredProducts
                            : products.slice(0, pageSize)
                    }
                />
                {hasMoreToFetch && !filteredProducts.length && (
                    <S.LoadMoreContainer>
                        <Button
                            aria-label="carregar mais"
                            icon={<ChevronDown aria-hidden />}
                            type="button"
                            onClick={loadMore}
                            disabled={loading}
                        >
                            Carregar mais
                        </Button>
                    </S.LoadMoreContainer>
                )}
            </Container>
            {redirect && <Redirect to="/" />}
        </S.Wrapper>
    )
}

export default Home
