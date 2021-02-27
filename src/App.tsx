import { useContext } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeContext } from 'contexts/ThemeContext'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from 'styles/global'
import Routes from 'components/Routes'

import './styles.css'

function App() {
    const { theme } = useContext(ThemeContext)

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Router>
                <Routes />
            </Router>
        </ThemeProvider>
    )
}

export default App
