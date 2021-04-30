import React, { Component } from 'react';
import request from 'superagent';
import './PokemonSearch.css';

class PokemonSearch extends Component {
  state = {
    nameSearch: '',
    typeFilter: '',
    sortDirection: '',
    typesArray: []
  }

  async fetchTypes() {
    const response = await request.get('https://pokedex-alchemy.herokuapp.com/api/pokedex/types');

    this.setState({
      typesArray: response.body.map(pokemon => pokemon.type)
    });
  }

  componentDidMount() {
    this.fetchTypes();
  }

  handleNameSearch = ({ target }) => {
    this.setState({ nameSearch: target.value });
  }

  handleSortChange = ({ target }) => {
    this.setState({ sortDirection: target.value });
  }

  handleTypeChange = ({ target }) => {
    this.setState({ typeFilter: target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state);
  }

  componentDidUpdate(prevProp, prevState) {
    if (prevState !== this.state) {
      this.props.onSearch(this.state);
    }
  }

  render() {

    const { nameSearch, typeFilter, sortDirection, typesArray } = this.state;
    const { pokemon } = this.props;
    console.log(typesArray);

    return (
      <form className="PokemonSearch" onSubmit={this.handleSubmit}>

        <input
          name="nameSearch"
          value={nameSearch}
          placeholder="Search Pokemon"
          onChange={this.handleNameSearch}
        />

        <select
          name="typeFilter"
          value={typeFilter}
          onChange={this.handleTypeChange}
        >
          <option value="">Sort Types</option>
          {typesArray.map(type => (
            <option
              key={type}
              value={type}>

              {type}

            </option>
          ))}
        </select>

        <select
          name="sortDirection"
          value={sortDirection}
          onChange={this.handleSortChange}
        >
          <option value="">Sort Alphabetically</option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>

        <button>Search Pokedex</button>

      </form>
    );
  }
}

export default PokemonSearch;