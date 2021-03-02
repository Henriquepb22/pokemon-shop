/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState, useCallback } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { fire, water, dragon } from 'styles/themes'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

import dragonLogo from 'assets/images/dragon.svg'
import waterLogo from 'assets/images/water.svg'
import fireLogo from 'assets/images/fire.svg'

type Shops = 'fire' | 'water' | 'dragon'
type Theme = typeof theme
type ContextType = {
    shopTheme: Theme
    changeTheme: (newTheme: Shops) => void
    selectedShop: {
        name: string
        logo: string
    }
}

const getShopTheme = (name: Shops) => {
    if (name === 'fire') return fire.colors
    if (name === 'water') return water.colors
    if (name === 'dragon') return dragon.colors
    return fire.colors
}

const getShopLogo = (name: Shops) => {
    if (name === 'fire') return fireLogo
    if (name === 'water') return waterLogo
    if (name === 'dragon') return dragonLogo
    return fireLogo
}

const initialValue: ContextType = {
    selectedShop: {
        name: '',
        logo: '',
    },
    changeTheme: () => {},
    shopTheme: theme,
}

export const ShopContext = createContext(initialValue)

type ShopProviderProps = {
    children: React.ReactNode
}

const ShopProvider = ({ children }: ShopProviderProps) => {
    const [currentTheme, setCurrentTheme] = useState(initialValue.shopTheme)
    const [selected, setSelected] = useState(initialValue.selectedShop)
    const [favicon, setFavicon] = useState('')

    const changeTheme = useCallback((newTheme: Shops) => {
        setSelected({
            name: newTheme,
            logo: getShopLogo(newTheme),
        })
        setFavicon(getShopLogo(newTheme))
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
            <HelmetProvider>
                <Helmet>
                    {!!favicon && <link rel="icon" href={favicon} />}
                    <meta
                        name="theme-color"
                        content={currentTheme.colors.primary}
                    />
                </Helmet>
            </HelmetProvider>
            <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
        </ShopContext.Provider>
    )
}

export default ShopProvider
