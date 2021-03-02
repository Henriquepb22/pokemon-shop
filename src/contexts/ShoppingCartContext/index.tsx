/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useMemo, useState, useEffect, useContext } from 'react'
import { ShoppingCartTheme } from 'styles/themes/ShoppingCartTheme'
import { ProductCardProps } from 'components/ProductCard'
import { ShopContext } from 'contexts/ShopContext'
import { toast } from 'react-toastify'

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

const saveCartOnLocalStorage = (
    selectedShop: string,
    products: ProductsProps
) => {
    if (selectedShop === 'fire')
        localStorage.setItem('fire-cart-data', JSON.stringify(products))
    if (selectedShop === 'water')
        localStorage.setItem('water-cart-data', JSON.stringify(products))
    if (selectedShop === 'dragon')
        localStorage.setItem('dragon-cart-data', JSON.stringify(products))
}

const getCartFromLocalStorage = (selectedShop?: string) => {
    if (selectedShop === 'fire') {
        const savedCart = localStorage.getItem('fire-cart-data')
        if (savedCart) {
            return JSON.parse(savedCart) as ProductsProps
        }
    }
    if (selectedShop === 'water') {
        const savedCart = localStorage.getItem('water-cart-data')
        if (savedCart) {
            return JSON.parse(savedCart) as ProductsProps
        }
    }
    if (selectedShop === 'dragon') {
        const savedCart = localStorage.getItem('dragon-cart-data')
        if (savedCart) {
            return JSON.parse(savedCart) as ProductsProps
        }
    }
    return null
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
    const { selectedShop } = useContext(ShopContext)
    const [products, setProducts] = useState<ProductsProps>(
        initialValue.products
    )
    const [isOpen, setIsOpen] = useState(initialValue.isOpen)

    useEffect(() => {
        const savedProducts = getCartFromLocalStorage(selectedShop.name)
        if (savedProducts) {
            setProducts(savedProducts)
        }
    }, [selectedShop])

    useEffect(() => {
        if (products.length) {
            saveCartOnLocalStorage(selectedShop.name, products)
        }
    }, [selectedShop, products])

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
        toast.success('Produto foi adicionado no carrinho!')
        toast.clearWaitingQueue()
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
