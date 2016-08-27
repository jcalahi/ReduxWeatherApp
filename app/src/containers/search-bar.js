import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
    this.onChangeInput = this.onChangeInput.bind(this);
  }
  render() {
    return (
      <form className="input-group">
        <input
          value={this.state.term}
          className="form-control"
          placeholder="Type something here"
          onChange={this.onChangeInput} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Search</button>
        </span>
      </form>
    );
  }
  onChangeInput(event) {
    this.setState({ term: event.target.value });
  }
}

export default SearchBar;
