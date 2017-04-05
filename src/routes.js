import React from 'react'
import { Route, IndexRoute, } from 'react-router'


import App from './components/App'
import Home from './components/Home/Home'
import Product from './components/Product/Product'
import ProductTest from './components/ProductTest/ProductTest'

export default(
    <Route path='/' component={ App }>
        <IndexRoute component={ Home }/>
        <Route path='/product' component={ Product }/>
        <Route path='/producttest' component={ ProductTest }/>
    
    </Route>
)