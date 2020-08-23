import React, {PureComponent} from 'react'
import style from './shoppingBasket.module.scss';

import { ShoppingBasketContext } from '../shoppingBasketProvider/shoppingBasketProvider.js';
import ShoppingBasketModal from '../shoppingBasketModal/shoppingBasketModal.js';

export default class ShoppingBasket extends PureComponent {
  state = {
    shoppingBasketModal: false
  }

  closeShoppingModal = () => {
    this.setState({shoppingBasketModal:false})
  }

  render() {
    const {shoppingBasketModal} = this.state
    return (
      <React.Fragment>
        <ShoppingBasketContext.Consumer>
          {( {basketItemsQuantity} ) => (
            <div className={style.shoppingBasket}>
              <button
                onClick={() => this.setState({shoppingBasketModal:true}) }>
                Корзина:&nbsp;<span>{basketItemsQuantity}</span>
              </button>
            </div>
          )}
        </ShoppingBasketContext.Consumer>
        {shoppingBasketModal &&
          <ShoppingBasketModal
            closeShoppingModal={this.closeShoppingModal}
          />
        }
      </React.Fragment>
    )
  }
}

