import * as React from 'react'
import { Switch } from 'react-router-dom'
import Route from './components/route'
import Catalog from './modules/catalog'
import ProductDetails from './modules/product-details'

function Router() {
    return (
        <Switch>
            <Route exact path="/" Component={Catalog} />
            <Route exact path="/product" Component={ProductDetails} />
        </Switch>
    )
}

export default Router
