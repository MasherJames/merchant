import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";
import Register from "./components/Register";
import Login from "./components/Login";
import AddProduct from "./components/AddProduct";
import Products from "./components/Products";
import Product from "./components/Product";
import Nav from "./components/Nav";

export default () => (
  <Router>
    <Container>
      <Nav />
      <Switch>
        <Route exact path="/" component={Products} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/products/:id" component={Product} />
        <Route path="/add-product" component={AddProduct} />
      </Switch>
    </Container>
  </Router>
);
