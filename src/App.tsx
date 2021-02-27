import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from 'styles/global'
import Routes from 'components/Routes'
import theme from 'styles/theme'

function App() {
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
