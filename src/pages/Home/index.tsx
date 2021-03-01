import productsMock from 'components/ProductCard/mock'
import ShoppingCart from 'components/ShoppingCart'
import { Container } from 'components/Container'
import ProductList from 'components/ProductList'
import Header from 'components/Header'

const Home = () => {
    return (
        <section style={{ position: 'relative' }}>
            <Header />
            <Container>
                <ProductList products={productsMock} />
            </Container>
            <ShoppingCart />
        </section>
    )
}

export default Home
