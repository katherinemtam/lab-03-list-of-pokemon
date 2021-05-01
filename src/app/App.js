import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Paging from './Paging';
import PokemonList from '../pokemon/PokemonList';
import PokemonSearch from '../pokemon/PokemonSearch';
import request from 'superagent';
import './App.css';

const POKEMON_API_URL = `https://pokedex-alchemy.herokuapp.com/api/pokedex`;
const TYPES_API_URL = 'https://pokedex-alchemy.herokuapp.com/api/pokedex/types';

class App extends Component {

  state = {
    pokemon: [],
    nameSearch: '',
    typeFilter: undefined,
    typesArray: [],
    sortDirection: undefined,
    page: 1
  }

  async componentDidMount() {
    this.fetchPokemon();
    this.fetchTypes();
  }

  async fetchPokemon() {
    const { nameSearch, typeFilter, sortDirection, page } = this.state;


    // console.log to see post state
    // console.log(this.state);

    const response = await request
      .get(POKEMON_API_URL)
      .query({ pokemon: nameSearch })
      .query({ sort: 'pokemon' })
      .query({ type: typeFilter })
      .query({ direction: sortDirection })
      .query({ page: page });

    // console.log for initial state
    // console.log(response.body.results);

    this.setState({
      pokemon: response.body.results,
    });
  }

  async fetchTypes() {
    const response = await request.get(TYPES_API_URL);

    this.setState({
      typesArray: response.body.map(pokemon => pokemon.type)
    });
  }

  handleSearch = ({ nameSearch, typeFilter, sortDirection }) => {
    //console.log to see if sorting returns
    // console.log(nameSearch, sortDirection);

    this.setState(
      {
        nameSearch: nameSearch,
        typeFilter: typeFilter || undefined,
        sortDirection: sortDirection || undefined,
        page: 1
      },
      () => this.fetchPokemon());
  }

  handlePrevPage = () => {
    this.setState(
      { page: Math.max(this.state.page - 1, 1) },
      () => this.fetchPokemon()
    );
  }

  handleNextPage = () => {
    this.setState(
      { page: Math.max(this.state.page + 1) },
      //math.ceil
      () => this.fetchPokemon()
    );
  }

  render() {

    const { pokemon, typeFilter, typesArray, page } = this.state;

    return (
      <div className="App">

        <Header />

        <section className="search-options">
          <PokemonSearch
            onSearch={this.handleSearch}
            pokemon={pokemon}
            typeFilter={typeFilter}
            types={typesArray} />

          <Paging
            page={page}
            onPrev={this.handlePrevPage}
            onNext={this.handleNextPage}
          />
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
