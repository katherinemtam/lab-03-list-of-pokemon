import React, { Component } from 'react';
import './PokemonSearch.css';

class PokemonSearch extends Component {
  state = {
    nameSearch: '',
  }

  handleNameSearch = ({ target }) => {
    this.setState({ nameSearch: target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state);
  }

  render() {

    const { nameSearch } = this.state;

    return (
      <form className="PokemonSearch" onSubmit={this.handleSubmit}>

        <input
          name="nameSearch"
          value={nameSearch}
          onChange={this.handleNameSearch}
        />

        <button>Search</button>

      </form>
    );
  }
}

export default PokemonSearch;