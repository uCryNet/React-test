import React, {PureComponent} from 'react'
import style from './filter.module.scss';

export default class Filter extends PureComponent {

  buttons = [
    {name: "new", title: "Новинки"},
    {name: "action", title: "Акции"}
  ]

  // тут рендерим кнопки фильтров и пакуем в переменную, чтобы удобно вставить
  render() {
    const buttons = this.buttons.map(({name, title}) => {
      return (
        <div
          className="form-check form-check-inline"
          key={name}
        >
          <input
            name={name}
            type="checkbox"
            className="form-check-input"
            id={name}
            onChange={(event) => {
              this.props.onFilterChange(event)
            }}
          />
          <label
            key={name}
            className="form-check-label"
            htmlFor={name}
          >
            <h6>
              {title}
            </h6>
          </label>
        </div>
      )

    })
    // вставляем кнопки в компонент
    return (
      <div className={style.filter}>
        {buttons}
      </div>
    )
  }
}
