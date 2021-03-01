/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useMemo, useState } from 'react'
import { ProductCardProps } from 'components/ProductCard'

type ProductsProps = (ProductCardProps & {
    quantity: number
})[]
export type ShoppingCartProps = {
    products: ProductsProps
    totalValue: number
    addProduct: (product: ProductCardProps) => void
    removeProduct: (product: ProductCardProps) => void
    openCart: () => void
    closeCart: () => void
    isOpen: boolean
}

const initialValue: ShoppingCartProps = {
    products: [],
    totalValue: 0,
    addProduct: () => {},
    removeProduct: () => {},
    openCart: () => {},
    closeCart: () => {},
    isOpen: false,
}

export const ShoppingCartContext = createContext(initialValue)

type ShoppingCartProviderProps = {
    children: React.ReactNode
}

const ShoppingCartProvider = ({ children }: ShoppingCartProviderProps) => {
    const [products, setProducts] = useState<ProductsProps>([])
    const [isOpen, setIsOpen] = useState(false)

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
        return products.reduce((acc, obj) => obj.quantity * obj.price + acc, 0)
    }, [products])

    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)

    const value: ShoppingCartProps = {
        products,
        totalValue,
        addProduct,
        removeProduct,
        openCart,
        closeCart,
        isOpen,
    }

    return (
        <ShoppingCartContext.Provider value={value}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export default ShoppingCartProvider
