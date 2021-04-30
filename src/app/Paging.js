import React, { Component } from 'react';
import './Paging.css';

class Paging extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state);
  }


  render() {

    const { page, onPrev, onNext } = this.props;

    return (
      <form className="Paging" onSubmit={this.handleSubmit}>

        <button className="prev" onClick={onPrev}>◀</button>
        <span>Page {page}</span>
        <button className="next" onClick={onNext}>▶</button>

      </form>
    );
  }

}

export default Paging;