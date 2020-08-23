import React, {PureComponent} from 'react'
import style from './filter.module.scss';

export default class Filter extends PureComponent {

  buttons = [
    { name : "new", title : "Новинки" },
    { name : "action", title : "Акции" }
  ]

  // тут рендерим кнопки фильтров и пакуем в переменную, чтобы удобно вставить
  render(){
    const buttons = this.buttons.map (({ name, title }) => {
      return (
        <label key={name}>
          <h4>
            {title}
          </h4>
          <input
            name={name}
            type="checkbox"
            onChange={ (event) => {this.props.onFilterChange(event)} }
          />
        </label>
      )

    })
    // вставляем кнопки в компонент
    return (
      <div className={style.filter}>
        { buttons }
      </div>
    )
  }
}
