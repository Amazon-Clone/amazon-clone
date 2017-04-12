import React from 'react'
import { Route, IndexRoute} from 'react-router'


import App from './components/App'
import Home from './components/Home/Home'
import Product from './components/Product/Product'
import ProductTest from './components/ProductTest/ProductTest'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import ProductDetails from './components/ProductDetails/ProductDetails'

export default(
    <Route>
    <Route path='/' component={ App }>
        <IndexRoute component={ Home }/>
        <Route path='/product' component={ Product }/>
        <Route path='/producttest' component={ ProductTest }/>
        {/*<Route path='/product/:id' component={ ProductDetails }/>*/}
        <Route path='/productdetails' component={ ProductDetails }/>
        
    </Route>
    <Route path='/register' component={ Register }/>
    <Route path='/login' component={ Login }/>
    </Route>
)