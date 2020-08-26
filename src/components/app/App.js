import React, {PureComponent} from 'react'
import Shop from '../../page/shop/shop.js'
import AboutUs from '../../page/aboutUs/aboutUs.js'
import ProductСard from '../../page/productСard/productСard.js'
import Menu from '../menu/menu.js'
import ErrorBoundry from '../error-boundry/error-boundry.js'
import ShoppingBasketProvider from '../shoppingBasketProvider/shoppingBasketProvider.js'
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";

require('../app/App.module.scss');

export default class App extends PureComponent {
  render() {
    return (
      <ErrorBoundry>
        <ShoppingBasketProvider>
          <BrowserRouter>
            <Menu/>
            <Switch>
              <Route path="/" exact children={<Shop/>}/>
              <Route path="/aboutus" children={<AboutUs/>}/>
              <Route path="/products/:id" render={(id) => <ProductСard id={id}/>}/>
              <Redirect to="/"/>
            </Switch>
          </BrowserRouter>
        </ShoppingBasketProvider>
      </ErrorBoundry>
    );
  }
}

