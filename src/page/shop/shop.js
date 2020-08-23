import React, {PureComponent} from 'react'
import './shop.scss';
//
import json from '../../components/json/json.js'
import Filter from '../../components/filter/filter.js'
import Filtered from '../../components/filtered/filtered.js'
import Search from '../../components/search/search.js';
import Sort from '../../components/sort/sort.js';

export default class Shop extends PureComponent {
  state = {
    search: "",
    filters: [],
    sort: "cheap to expensive"
  };

  // если выбрали фильтр - сетим в state, если удалил - удаляем из state
  onFilterChange = ( {currentTarget} ) => {
    if ( currentTarget.checked ) {
      this.setState({ filters: [...this.state.filters, currentTarget.name]});
    } else {
      this.setState(({ filters }) => {
        const idx = filters.findIndex((el) => currentTarget.name === el) // получаем индекс удаляемого эл.
        const newArray = [
          ...filters.slice(0, idx),
          ...filters.slice(idx + 1)
        ]
        return { filters : newArray }
      })
    }
  }

  // смотрим, что вводит юзер
  onSearchChange = ( {currentTarget} ) => {
    const search = currentTarget.value
    this.setState({ search } )
  }

  toSort = ({ currentTarget }) => {
    const sort = currentTarget.value
      this.setState({ sort } )
  }

  render() {
    return (
      <div>
        <div className="navigation">
          <Filter
            onFilterChange={this.onFilterChange}
          />
          <Search
            onSearchChange={this.onSearchChange}
          />
          <Sort
            toSort={this.toSort}
            sort={this.state.sort}
          />
        </div>
        <Filtered
          search={this.state.search}
          filters={this.state.filters}
          sort={this.state.sort}
          items={json}
        />
      </div>
    )
  }
}
