import ShopProvider from 'contexts/ShopContext'
import ShoppingCartProvider from 'contexts/ShoppingCartContext'
import { HashRouter as Router } from 'react-router-dom'
import ModalProvider from 'contexts/ModalContext'
import { ToastContainer } from 'react-toastify'
import { GlobalStyles } from 'styles/global'
import Routes from 'components/Routes'

import 'react-toastify/dist/ReactToastify.css'
import './styles.css'

function App() {
    return (
        <ShopProvider>
            <ShoppingCartProvider>
                <ModalProvider>
                    <GlobalStyles />
                    <Router>
                        <ToastContainer
                            autoClose={1500}
                            position="bottom-right"
                            limit={1}
                        />
                        <Routes />
                    </Router>
                </ModalProvider>
            </ShoppingCartProvider>
        </ShopProvider>
    )
}

export default App
