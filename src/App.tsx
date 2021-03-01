import { useContext } from 'react'
import ShopProvider, { ShopContext } from 'contexts/ShopContext'
import ShoppingCartProvider from 'contexts/ShoppingCartContext'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from 'styles/global'
import Routes from 'components/Routes'

import './styles.css'

function App() {
    const { shopTheme } = useContext(ShopContext)

    return (
        <ShopProvider>
            <ThemeProvider theme={shopTheme}>
                <ShoppingCartProvider>
                    <GlobalStyles />
                    <Router>
                        <Routes />
                    </Router>
                </ShoppingCartProvider>
            </ThemeProvider>
        </ShopProvider>
    )
}

export default App
