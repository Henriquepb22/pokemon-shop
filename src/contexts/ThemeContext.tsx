import { createContext, useState } from 'react'
import { fire, water, dragon } from 'styles/themes'
import theme from 'styles/theme'

type Themes = 'fire' | 'water' | 'dragon'
type Theme = typeof theme
type ContextType = {
    theme: Theme
    changeTheme?: (name: string, newTheme: Theme) => void
    selectedTheme: string
}

const getTheme = (name: Themes) => {
    if (name === 'fire') return fire.colors
    if (name === 'water') return water.colors
    if (name === 'dragon') return dragon.colors
}

const initialValue: ContextType = {
    selectedTheme: 'dragon',
    theme: {
        ...theme,
        colors: {
            ...theme.colors,
            ...getTheme('dragon'),
        },
    },
}

export const ThemeContext = createContext(initialValue)

type ThemeProviderProps = {
    children: React.ReactNode
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [currentTheme, setCurrentTheme] = useState(initialValue.theme)
    const [selected, setSelected] = useState(initialValue.selectedTheme)

    const changeTheme = (name: string, newTheme: Theme) => {
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
        selectedTheme: selected,
        theme: currentTheme,
        changeTheme,
    }

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    )
}

export default ThemeProvider
