import ProductCard from 'components/ProductCard'
import Header from 'components/Header'

const props = {
    id: 4,
    name: 'charmander',
    price: 25.5,
    img:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
}

const Home = () => {
    return (
        <section>
            <Header />
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '10rem',
                }}
            >
                <ProductCard {...props} />
            </div>
        </section>
    )
}

export default Home
