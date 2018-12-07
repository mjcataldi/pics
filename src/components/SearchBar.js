import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: ""
    };
  }

  state = {
    term: "",
    searchButtonText: "Search"
  };

  onSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onSubmit} className="ui form">
          <div className="field">
            <input
              type="text"
              placeholder="Enter a search term"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
        <h2>{this.state.title}</h2>
        <p>{this.state.term}</p>
      </div>
    );
  }
}
