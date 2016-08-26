import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <form className="input-group">
        <input
          placeholder='Type something here'/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Search</button>
        </span>
      </form>
    );
  }
}

export default SearchBar;
