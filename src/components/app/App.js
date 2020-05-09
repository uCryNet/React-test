import React, {PureComponent} from 'react'
import './App.scss';
import Shop from '../../page/shop/shop.js'
import AboutUs from '../../page/aboutUs/aboutUs.js'
import Menu from '../menu/menu.js'
import ShoppingBasketProvider from '../shoppingBasketProvider/shoppingBasketProvider.js'
import { BrowserRouter, Switch, Route, Redirect, Router } from "react-router-dom";

export default class App extends PureComponent {


  render() {
    return (
      <main>
        <ShoppingBasketProvider>
          <BrowserRouter>
            <Menu />
            <Switch>
              <Route path="/" exact children={<Shop />} />
              <Route path="/aboutus" children={<AboutUs />} />
              <Redirect to="/" />
            </Switch>
          </BrowserRouter>
        </ShoppingBasketProvider>
      </main>
    );
  }
}

