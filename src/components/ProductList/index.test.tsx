import { renderWithTheme } from 'utils/tests/helpers'

import productsMock from 'components/ProductCard/mock'
import ProductList from '.'

describe('<ProductList />', () => {
    it('should render the product list', () => {
        const { container } = renderWithTheme(
            <ProductList products={productsMock} />
        )

        expect(container.firstChild?.childNodes).toHaveLength(
            productsMock.length
        )
    })
})
