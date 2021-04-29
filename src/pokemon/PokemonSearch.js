import React, { Component } from 'react';
import './PokemonSearch.css';

class PokemonSearch extends Component {
  state = {
    nameSearch: '',
    hpFilter: '',
    attackFilter: '',
    defenseFilter: ''
  }

  handleNameSearch = ({ target }) => {
    this.setState({ nameSearch: target.value });
  }

  handleHpFilter = ({ target }) => {
    this.setState({ hpFilter: target.value });
  }

  handleAttackFilter = ({ target }) => {
    this.setState({ attackFilter: target.value });
  }

  handleDefenseFilter = ({ target }) => {
    this.setState({ defenseFilter: target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state);
  }

  render() {

    const { nameSearch, hpFilter, attackFilter, defenseFilter, sortField } = this.state;
    const { hps } = this.props;

    return (
      <form className="PokemonSearch" onSubmit={this.handleSubmit}>

        <input
          name="nameSearch"
          value={nameSearch}
          onChange={this.handleNameSearch}
        />

        <p>HP:</p>
        <select
          name="hpFilter"
          value={hpFilter}
          onChange={this.handleHpFilter}
        >
          <option value="">Sort by...</option>
          {hps.map(hp => (
            <option
              key={hp}
              value={hp}
            > {hp}
            </option>
          ))}
        </select>

        {/*<p>Attack:</p>
        <select
          name="attackFilter"
          value={attackFilter}
          onChange={this.handleAttackFilter}
        >
          <option value="">Sort by...</option>
          {attacks.map(attack => (
            <option
              key={attack}
              value={attack}
            > {attack}
            </option>
          ))}
        </select>

        <p>Defense:</p>
        <select
          name="defenseFilter"
          value={defenseFilter}
          onChange={this.handleDefenseFilter}
        >
          <option value="">Sort by...</option>
          {defenses.map(defense => (
            <option
              key={defense}
              value={defense}
            > {defense}
            </option>
          ))}
        </select>

        <p>All Data:</p>
        <select
          name="sortField"
          value={sortField}
          onChange={this.handleSearchChange}
        >
          <option value="">Sort by...</option>
          <option value="title">title</option>
          <option value="horns">horns</option>
        </select> */}

        <button>Search</button>

      </form>
    );
  }
}

export default PokemonSearch;