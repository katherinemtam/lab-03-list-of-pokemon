import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import PokemonList from './PokemonList';
import request from 'superagent';
import './App.css';

const POKEMON_API_URL = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';

class App extends Component {

  state = {
    pokemon: []
  }

  async componentDidMount() {
    const response = await request.get(POKEMON_API_URL);
  }


  render() {

    const { pokemonData } = this.state;

    return (
      <div className="App">

        <Header />

        <section className="search-options">

        </section>

        <main>

          Something should appear here
          <PokemonList pokemonData={pokemonData} />

        </main>

        <Footer />

      </div>
    );
  }

}

export default App;
