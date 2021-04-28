import React, { Component } from 'react';
import PokemonItem from './PokemonItem';
import './PokemonList.css';

class PokemonList extends Component {
  state = {}
  render() {

    const pokemonData = this.props.pokemonData;

    return (
      <ul className="PokemonList">
        <PokemonItem pokemonData={pokemonData} />
        <PokemonItem />
        <PokemonItem />
        <PokemonItem />
        <PokemonItem />
        <PokemonItem />
      </ul>
    );
  }
}

export default PokemonList;