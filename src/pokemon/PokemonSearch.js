import React, { Component } from 'react';
import './PokemonSearch.css';

class PokemonSearch extends Component {
  state = {
    nameFilter: '',
    sortField: '',
    typeFilter: ''
  }

  handleNameChange = ({ target }) => {
    this.setState({ nameFilter: target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state);
  }

  render() {

    const { nameFilter } = this.state;

    return (
      <form className="PokemonSearch" onSubmit={this.handleSubmit}>

        <input
          name="nameFilter"
          value={nameFilter}
          onChange={this.handleNameChange}
        />

        <button>Search</button>

      </form>
    );
  }
}

export default PokemonSearch;