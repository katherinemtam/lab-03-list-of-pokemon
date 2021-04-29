import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import PokemonList from '../pokemon/PokemonList';
import request from 'superagent';
import './App.css';

const POKEMON_API_URL = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';

class App extends Component {

  state = {
    pokemon: []
  }

  async componentDidMount() {
    const response = await request.get(POKEMON_API_URL);
    this.setState({ pokemon: response.body.results });
  }


  render() {

    const { pokemon } = this.state;

    return (
      <div className="App">

        <Header />

        <section className="search-options">

        </section>

        <main>

          Something should appear here
          <PokemonList pokemon={pokemon} />

        </main>

        <Footer />

      </div>
    );
  }

}

export default App;
