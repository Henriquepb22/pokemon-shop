/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useMemo, useState } from 'react'
import { ShoppingCartTheme } from 'styles/themes/ShoppingCartTheme'
import { ProductCardProps } from 'components/ProductCard'

type ProductsProps = (ProductCardProps & {
    quantity: number
})[]
export type ShoppingCartProps = {
    products: ProductsProps
    totalValue: number
    addProduct: (product: ProductCardProps) => void
    removeProduct: (productId: number) => void
    openCart: () => void
    closeCart: () => void
    isOpen: boolean
    clearCart: () => void
}

const initialValue: ShoppingCartProps = {
    products: [],
    totalValue: 0,
    addProduct: () => {},
    removeProduct: () => {},
    openCart: () => {},
    closeCart: () => {},
    isOpen: false,
    clearCart: () => {},
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

    const removeProduct = (productId: number) =>
        setProducts((oldProducts) => {
            return oldProducts.filter(({ id }) => id !== productId)
        })

    const totalValue = useMemo(() => {
        return products.reduce((acc, obj) => obj.quantity * obj.price + acc, 0)
    }, [products])

    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)
    const clearCart = () => setProducts([])

    const value: ShoppingCartProps = {
        products,
        totalValue,
        addProduct,
        removeProduct,
        openCart,
        closeCart,
        isOpen,
        clearCart,
    }

    return (
        <ShoppingCartContext.Provider value={value}>
            <ShoppingCartTheme isOpen={isOpen} />
            {children}
        </ShoppingCartContext.Provider>
    )
}

export default ShoppingCartProvider
