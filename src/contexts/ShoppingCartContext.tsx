import { createContext, useMemo, useState } from 'react'
import { ProductCardProps } from 'components/ProductCard'

type ProductsProps = (ProductCardProps & {
    quantity: number
})[]
type ShoppingCartProps = {
    products: ProductsProps
    totalValue: number
    addProduct?: (product: ProductCardProps) => void
    removeProduct?: (product: ProductCardProps) => void
}

const initialValue: ShoppingCartProps = {
    products: [],
    totalValue: 0,
}

export const ShoppingCartContext = createContext(initialValue)

type ShoppingCartProviderProps = {
    children: React.ReactNode
}

const ShoppingCartProvider = ({ children }: ShoppingCartProviderProps) => {
    const [products, setProducts] = useState<ProductsProps>([])

    const addProduct = (product: ProductCardProps) => {
        if (products.find(({ id }) => id === product.id)) {
            setProducts((oldProducts) => {
                return oldProducts.map((item) => {
                    if (item.id !== product.id) return item
                    return {
                        ...item,
                        quantity: item.quantity + 1,
                    }
                })
            })
        } else {
            setProducts((oldProducts) => [
                ...oldProducts,
                {
                    ...product,
                    quantity: 1,
                },
            ])
        }
    }

    const removeProduct = (product: ProductCardProps) =>
        setProducts((oldProducts) => {
            return oldProducts.filter(({ id }) => id !== product.id)
        })

    const totalValue = useMemo(() => {
        return products.reduce(
            (acc, obj) => obj.quantity * obj.quantity + acc,
            0
        )
    }, [products])

    const value: ShoppingCartProps = {
        products,
        totalValue,
        addProduct,
        removeProduct,
    }

    return (
        <ShoppingCartContext.Provider value={value}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export default ShoppingCartProvider
