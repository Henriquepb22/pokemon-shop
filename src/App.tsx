import ShopProvider from 'contexts/ShopContext'
import ShoppingCartProvider from 'contexts/ShoppingCartContext'
import { BrowserRouter as Router } from 'react-router-dom'
import ModalProvider from 'contexts/ModalContext'
import { GlobalStyles } from 'styles/global'
import Routes from 'components/Routes'

import './styles.css'

function App() {
    return (
        <ShopProvider>
            <ShoppingCartProvider>
                <ModalProvider>
                    <GlobalStyles />
                    <Router>
                        <Routes />
                    </Router>
                </ModalProvider>
            </ShoppingCartProvider>
        </ShopProvider>
    )
}

export default App
