import React, {PureComponent} from 'react'
import './shop.scss';
//
import json from '../../components/json/json.js'
import Filter from '../../components/filter/filter.js'
import Filtered from '../../components/filtered/filtered.js'
import Search from '../../components/search/search.js';

export default class Shop extends PureComponent {
  state = {
    search: undefined,
    filters: [],
    items: []
  };

  // проверяем какие фильтры выбрал юзер
  onFilterChange = ( event ) => {
    const checkboxes = [...event.currentTarget.closest(".filter").getElementsByTagName("input")]
    const filters = [];
    checkboxes.map(checkbox => {
      if (checkbox.checked) {
        filters.push(checkbox.name);
      }
    });
    this.setState({ filters }, this.filtredInput);
  }

  // фильтруем согласно выбранным фильтрам
  filtredInput() {
    const items = json.filter(element => this.state.filters.every(key => element[key]));
    this.setState( {items} )
  }

  // смотрим, что вводит юзер
  onSearchChange = ( {currentTarget} ) => {
    const search = currentTarget.value
    this.setState({ search }, this.filtredSearch )
  }


  // фильтруем соглассно вводу юзера
  filtredSearch() {
    const items = json.filter(word =>
        word.name.toLocaleLowerCase().indexOf(this.state.search.toLocaleLowerCase()) !== -1
    )
    this.setState( {items} )
  }

  updateShoppingBasket(event) {
    const name = event.target.closest(".item").querySelector(".item__name").textContent
    let quantity = 0
    let shoppingBasketItems = []
    const item = {name, quantity}
    shoppingBasketItems.push(item)
    console.log( shoppingBasketItems );
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
        </div>
        { this.state.items.length
          ? <Filtered
              items={this.state.items}
              updateShoppingBasket={this.updateShoppingBasket}
            /> // если фильтры есть
          : <Filtered
              items={json}
              updateShoppingBasket={this.updateShoppingBasket}
            /> // если фильтров нет
        }
      </div>
    )
  }
}

