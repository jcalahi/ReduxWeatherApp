import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          value={this.state.term}
          className="form-control"
          placeholder="Get forecast of Philippine cities"
          onChange={this.onChangeInput} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-primary">Search</button>
        </span>
      </form>
    );
  }
  onChangeInput(event) {
    this.setState({ term: event.target.value });
  }
  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    // reset the field after doing search
    this.setState({ term: ' '});
  }
}

function mapStateToProps(state) {
  return { state: state.weather };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
