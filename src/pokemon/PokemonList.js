import React, { Component } from 'react';
import PokemonItem from './PokemonItem';
import './PokemonList.css';

class PokemonList extends Component {
  render() {

    const pokemon = this.props.pokemon;

    return (
      <ul className="PokemonList">
        {pokemon.map(eachPokemon => {
          return <PokemonItem key={eachPokemon._id} pokemon={eachPokemon} />;
        })}
      </ul>
    );
  }
}

export default PokemonList;