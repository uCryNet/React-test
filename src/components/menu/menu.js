import React, {PureComponent} from 'react'
import { Link } from "react-router-dom";
import './menu.scss';
import ShoppingBasket from '../shoppingBasket/shoppingBasket.js';


export default class Menu extends PureComponent {
  render() {
    return (
      <div className="head">
        <nav>
          <Link to="/">Главная</Link>
          <Link to="/aboutus">О нас</Link>
        </nav>
        <ShoppingBasket />
      </div>
    )
  }
}

