import React, {PureComponent} from 'react'
// import json from '../json/json.js'

export default class Search extends PureComponent {
  render() {
    return (
      <div className="search">
        <input
          type="text"
          placeholder="Поиск"
          id="search"
          onChange={ (event) => this.props.onSearchChange(event) }
        />
      </div>
    )
  }
}
