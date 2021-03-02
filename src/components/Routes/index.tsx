import { Switch, Route, Redirect } from 'react-router-dom'
import Home from 'pages/Home'

const Routes = () => {
    return (
        <Switch>
            <Route path="/shop/fire" exact>
                <Home type="fire" />
            </Route>
            <Route path="/shop/water" exact>
                <Home type="water" />
            </Route>
            <Route path="/shop/dragon" exact>
                <Home type="dragon" />
            </Route>
            <Redirect from="*" to="/shop/fire" />
            <Redirect from="*" to="/shop/fire" />
        </Switch>
    )
}

export default Routes
