import React, { Component } from 'react';
import './PokemonItem.css';

class PokemonItem extends Component {
  render() {

    const pokemon = this.props.pokemon;

    return (
      <li className="PokemonItem">

        <h2><a href={pokemon.pokedex}>{pokemon.pokemon}</a></h2>

        <div className="types">
          <h3>{pokemon.type_1}</h3>
          <h3>{pokemon.type_2}</h3>
        </div>

        <img
          src={pokemon.url_image}
          alt={pokemon.pokemon}
        />
        <p>HP: {pokemon.hp}</p>
        <p>Attack: {pokemon.attack}</p>
        <p>Defense: {pokemon.defense}</p>
      </li >
    );
  }
}

export default PokemonItem;