import { createContext, useState } from 'react'
import { fire, water, dragon } from 'styles/themes'
import theme from 'styles/theme'

type Shops = 'fire' | 'water' | 'dragon'
type Theme = typeof theme
type ShopTheme = typeof fire | typeof water | typeof dragon

type ContextType = {
    shopTheme: Theme
    changeTheme?: (name: string, newTheme: ShopTheme) => void
    selectedShop: string
}

const getShopTheme = (name: Shops) => {
    if (name === 'fire') return fire.colors
    if (name === 'water') return water.colors
    if (name === 'dragon') return dragon.colors
}

const initialValue: ContextType = {
    selectedShop: 'dragon',
    shopTheme: {
        ...theme,
        colors: {
            ...theme.colors,
            ...getShopTheme('dragon'),
        },
    },
}

export const ShopContext = createContext(initialValue)

type ShopProviderProps = {
    children: React.ReactNode
}

const ShopProvider = ({ children }: ShopProviderProps) => {
    const [currentTheme, setCurrentTheme] = useState(initialValue.shopTheme)
    const [selected, setSelected] = useState(initialValue.selectedShop)

    const changeTheme = (name: string, newTheme: ShopTheme) => {
        setSelected(name)
        setCurrentTheme((current) => {
            return {
                ...current,
                colors: {
                    ...current.colors,
                    ...newTheme.colors,
                },
            }
        })
    }

    const value: ContextType = {
        selectedShop: selected,
        shopTheme: currentTheme,
        changeTheme,
    }

    return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}

export default ShopProvider
