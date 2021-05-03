import React, { Component } from 'react';
import './Paging.css';

class Paging extends Component {
  state = {
    pokemonPerPage: 25,
  }

  handlePerPageChange = ({ target }) => {
    this.setState({ pokemonPerPage: target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onPerPageChange(this.state);
  }

  componentDidUpdate(prevProp, prevState) {
    if (prevState !== this.state) {
      this.props.onPerPageChange(this.state);
    }
  }

  render() {

    const { pokemonPerPage, page, onPrev, onNext } = this.props;

    return (
      <form className="Paging" onSubmit={this.handleSubmit}>

        <select
          name="pokemonPerPage"
          value={pokemonPerPage}
          onChange={this.handlePerPageChange}
        >
          <option value="">Pokemon Per Page</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>

        <button
          className="prev"
          onClick={onPrev}
          disabled={page < 2}
        >◀</button>

        <span>Page {page}</span>

        <button
          className="next"
          onClick={onNext}
        >▶</button>

      </form>
    );
  }

}

export default Paging;