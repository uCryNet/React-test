import React, {PureComponent} from 'react'
import { Link, NavLink } from "react-router-dom";
import style from './menu.module.scss';
import ShoppingBasket from '../shoppingBasket/shoppingBasket.js';

const myContext = React.createContext({});
export const UserProvider = myContext.Provider;
export const UserConsumer = myContext.Consumer;

export default class Menu extends PureComponent {
  render() {
    return (
      <div className={style.head}>
        <nav>
          <NavLink exact activeClassName={style.active} to="/">Главная</NavLink>
          <NavLink activeClassName={style.active} to="/aboutus">О нас</NavLink>
        </nav>

        <UserProvider>
          <ShoppingBasket />
        </UserProvider>
      </div>
    )
  }
}

