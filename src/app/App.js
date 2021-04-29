import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import PokemonList from '../pokemon/PokemonList';
import PokemonSearch from '../pokemon/PokemonSearch';
import request from 'superagent';
import './App.css';

const POKEMON_API_URL = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';

class App extends Component {

  state = {
    pokemon: [],
    nameSearch: '',
  }

  async componentDidMount() {
    const response = await request.get(POKEMON_API_URL);
    this.setState({ pokemon: response.body.results });
  }

  handleSearch = ({ nameSearch }) => {
    console.log(nameSearch);
  }

  render() {

    const { pokemon } = this.state;

    return (
      <div className="App">

        <Header />

        <section className="search-options">
          <PokemonSearch
            onSearch={this.handleSearch}
            pokemon={pokemon} />
        </section>

        <main>

          <PokemonList pokemon={pokemon} />

        </main>

        <Footer />

      </div>
    );
  }

}

export default App;
