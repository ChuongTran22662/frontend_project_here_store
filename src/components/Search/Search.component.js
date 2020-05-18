import React, { Component } from 'react';
import './search.styles.css';

export default class Search extends Component {
  render() {
    return (
      <div className="search_container">
        <input className="input_search_container" placeholder="Tìm kiếm"></input>
      </div>
    );
  }
}
