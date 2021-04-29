import React, { Component } from 'react';
import './PokemonItem.css';

class PokemonItem extends Component {
  state = {}
  render() {
    return (
      <li className="PokemonItem">
        <h2>Pokemon Name</h2>
        <img
          src=""
          alt=""
        />

        <p>type_1</p>
        <p>type_2</p>

      </li>
    );
  }
}

export default PokemonItem;