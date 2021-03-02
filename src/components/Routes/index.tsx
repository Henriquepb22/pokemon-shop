import { Switch, Route, Redirect } from 'react-router-dom'
import Home from 'pages/Home'

const Routes = () => {
    return (
        <Switch>
            <Route path="/shop/:type" exact>
                <Home />
            </Route>
            <Redirect from="*" to="/shop/fire" exact />
        </Switch>
    )
}

export default Routes
