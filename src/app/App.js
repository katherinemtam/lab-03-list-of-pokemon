import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import PokemonList from '../pokemon/PokemonList';
import PokemonSearch from '../pokemon/PokemonSearch';
import request from 'superagent';
import './App.css';

const POKEMON_API_URL = `https://pokedex-alchemy.herokuapp.com/api/pokedex`;

class App extends Component {

  state = {
    pokemon: [],
    nameSearch: '',
    // hp: '',
    sortField: '',
  }

  async componentDidMount() {
    this.fetchPokemon();
  }

  async fetchPokemon() {
    const { nameSearch, sortField } = this.state;
    // console.log to see post state
    // console.log(this.state);

    const response = await request
      .get(POKEMON_API_URL)
      .query({ pokemon: nameSearch })
      .query({ sort: 'pokemon' })
      .query({ direction: sortField });

    // const hpOptions = [...new Set(response.body.results.map(pokemon => pokemon.hp))];
    // console.log for initial state
    // console.log(response.body.results);
    this.setState({
      pokemon: response.body.results,
      // hp: hpOptions
    });
  }

  handleSearch = ({ nameSearch, sortField
    //  attackFilter, defenseFilter, 
  }) => {
    console.log(nameSearch, sortField);
    this.setState(
      {
        nameSearch: nameSearch,
        sortField: sortField
      },
      () => this.fetchPokemon());

  }

  render() {

    const { pokemon } = this.state;
    // const { hpOptions,
    //   // attacksOptions,
    //   // defensesOptions
    // } = this.props;

    return (
      <div className="App">

        <Header />

        <section className="search-options">
          <PokemonSearch
            onSearch={this.handleSearch}
            pokemon={pokemon} />
          {/* hps={hpOptions}  */}
          {/*attacks={attacksOptions}
          defenses={defensesOptions} />*/}
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
