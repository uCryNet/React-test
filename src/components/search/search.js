import React, {PureComponent} from 'react'
import style from './search.module.scss';

export default class Search extends PureComponent {
  render() {
    return (
      <div className={style.search}>
        <input
          type="text"
          placeholder="Поиск"
          id="search"
          className="form-control"
          onChange={ (event) => this.props.onSearchChange(event) }
        />
      </div>
    )
  }
}
