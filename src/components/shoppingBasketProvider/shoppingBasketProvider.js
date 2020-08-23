import React, { Component, PureComponent } from "react";

export const ShoppingBasketContext = React.createContext();

export default class ShoppingBasketProvider extends Component {
  state = {
    basketItems: [],
    basketItemsQuantity: 0,
    totalPrice: 0,
    product: []
  }

  addToCard = (name, price) => {
    let basketItemsQuantity = 0, // храним кол-во позиций + число повторяющийся позиций (для вывода кол-ва айтемов возле корзины)
        totalPrice = 0; // общая сумма
        const basketItems = this.state.basketItems; // текущие айтемы в корзине

    // добавляем уник. айтемы в корзину или наращиваем quantity если айтем уже есть
    (function() {
      const found = basketItems.some((element) => {
        if (element.name === name) {
          element.quantity++ // если позиция уже есть - просто увеличиваем его колличество в объекте айтема
          return true
        }
      });
      if (!found) {
        basketItems.push({ name: name, price : parseInt(price), quantity : 1 }); // формируем сам объект айтема
      } // если айтем уникальный - пушим в массив
    })();

    // общее число повторяющихся позиций (выводится число рядом с корзиной)
    (function() {
      basketItems.map(element => basketItemsQuantity += element.quantity)
    })();

    // общая сумма
    (function() {
      basketItems.map(element => {
        totalPrice = element.price * element.quantity + totalPrice
      })
    })();

    this.setState({ basketItemsQuantity })
    this.setState({ basketItems })
    this.setState({ totalPrice })
  }

  render() {
    const { basketItemsQuantity, basketItems, totalPrice, product } = this.state;
    return (
      <ShoppingBasketContext.Provider
        value={{
          basketItemsQuantity,
          basketItems,
          totalPrice,
          detailProduct: this.detailProduct,
          addToCard: this.addToCard
        }}>
        {this.props.children}
      </ShoppingBasketContext.Provider>
    )
  }
}
