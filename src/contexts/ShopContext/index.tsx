/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState, useCallback } from 'react'
import { fire, water, dragon } from 'styles/themes'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

type Shops = 'fire' | 'water' | 'dragon'
type Theme = typeof theme

type ContextType = {
    shopTheme: Theme
    changeTheme: (newTheme: Shops) => void
    selectedShop: string
}

const getShopTheme = (name: Shops) => {
    if (name === 'fire') return fire.colors
    if (name === 'water') return water.colors
    if (name === 'dragon') return dragon.colors
}

const initialValue: ContextType = {
    selectedShop: 'fire',
    changeTheme: () => {},
    shopTheme: {
        ...theme,
        colors: {
            ...theme.colors,
            ...getShopTheme('fire'),
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

    const changeTheme = useCallback((newTheme: Shops) => {
        setSelected(newTheme)
        setCurrentTheme((current) => {
            return {
                ...current,
                colors: {
                    ...current.colors,
                    ...getShopTheme(newTheme),
                },
            }
        })
    }, [])

    const value: ContextType = {
        selectedShop: selected,
        shopTheme: currentTheme,
        changeTheme,
    }

    return (
        <ShopContext.Provider value={value}>
            <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
        </ShopContext.Provider>
    )
}

export default ShopProvider
