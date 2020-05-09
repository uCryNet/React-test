import React, {PureComponent} from 'react'

export default class Filtered extends PureComponent {
  render() {
    // рендерим все айтемы и пакуем в переменную
    const { items } = this.props

    const result = items.map((item, i) => {
      return (
        <div key={i} className="item">
          <div><img src={item.img} width="250px" height="250px" alt={item.name}></img></div>
          <h2 className="item__name">{item.name}</h2>
          <p>{item.components}</p>
          <p><span>{item.mass}</span></p>
          <p><span>{item.price}</span></p>
          <button
            onClick={ (event) => {this.props.updateShoppingBasket(event)} }
          >
            Заказать
          </button>
        </div>
      )
    })

    return (
      <div className="content">{result}</div>
    )
  }
}
