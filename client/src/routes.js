import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AddProduct from './components/AddProduct';
import Products from './components/Products';
import Product from './components/Product';

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Products} />
      <Route path="/products/:id" component={Product} />
      <Route path="/add-product" component={AddProduct} />
    </Switch>
  </Router>
)
