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
    staticPokemon: [],
    nameSearch: '',
    // hp: [],
  }

  async componentDidMount() {
    this.fetchPokemon();
  }

  async fetchPokemon() {
    const { nameSearch } = this.state;

    const response = await request
      .get(POKEMON_API_URL)
      .query({ pokemon: nameSearch });

    // const hpsOptions = [...new Set(response.body.results.map(pokemon => pokemon.hp))];

    this.setState({
      pokemon: response.body.results,
      staticPokemon: response.body.results,
      // hp: hpsOptions
    });
  }

  handleSearch = async ({ nameSearch,
    // hpFilter, attackFilter, defenseFilter, sortField 
  }) => {

    // const { staticPokemon } = this.state;
    // const searchedData = staticPokemon

    // .filter(eachPokemon => {
    //   return !hpFilter || eachPokemon.hp === Number(hpFilter);
    // })

    // .filter(eachPokemon => {
    //   return !attackFilter || eachPokemon.attack === Number(attackFilter);
    // })

    // .filter(eachPokemon => {
    //   return !defenseFilter || eachPokemon.defense === Number(defenseFilter);
    // })

    // .sort((a, b) => {
    //   if (a[sortField] < b[sortField]) return -1;
    //   if (a[sortField] > b[sortField]) return 1;
    //   return 0;
    // });
    this.setState(
      { nameSearch: nameSearch }, () => this.fetchPokemon());
    console.log(nameSearch);
  }

  render() {

    const { pokemon,
      // hp 
    } = this.state;
    // const { hpsOptions, attacksOptions, defensesOptions } = this.props;

    return (
      <div className="App">

        <Header />

        <section className="search-options">
          <PokemonSearch
            onSearch={this.handleSearch}
            pokemon={pokemon} />
          {/*hps={hp} 
          attacks={attacksOptions}
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
