import React, { Component } from 'react';
import './PokemonItem.css';

class PokemonItem extends Component {
  render() {

    const pokemon = this.props.pokemon;

    return (
      <li className="PokemonItem">

        <h2><a href={pokemon.pokedex}>{pokemon.pokemon}</a></h2>
        <img
          src={pokemon.url_image}
          alt={pokemon.pokemon}
        />
        <p>HP: {pokemon.hp}</p>
        <p>Attack: {pokemon.attack}</p>
        <p>Defense: {pokemon.defense}</p>
      </li>
    );
  }
}

export default PokemonItem;