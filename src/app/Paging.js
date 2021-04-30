import React, { Component } from 'react';
import './Paging.css';

class Paging extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state);
  }


  render() {

    return (
      <form className="Paging" onSubmit={this.handleSubmit}>

        <button className="prev">◀</button>
        <span>Page 1</span>
        <button className="next">▶</button>

      </form>
    );
  }

}

export default Paging;