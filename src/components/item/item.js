import React, {PureComponent} from 'react'
// import { Route } from "react-router";

import json from '../json/json.js'

export default class Item extends PureComponent {
  // рендерим все айтемы и пакуем в переменную
  render() {
    const item = json.map((item, i) => {
      return (
        <div key={i} className="item">
          <div><img src={item.img} width="250px" height="250px" alt={item.name}></img></div>
          <h2>{item.name}</h2>
          <p>{item.components}</p>
          <p><span>{item.mass}</span></p>
          <p><span>{item.price}</span></p>
          <button>Заказать</button>
        </div>
      )
    })
    // вставляем айтемы в компонент
    return (
      <div className="content">{item}</div>
    )
  }
}
