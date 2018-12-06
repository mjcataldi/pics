import React, { Component } from "react";

export default class SearchBar extends Component {
  //   constuctor(props) {
  //     super(props);

  //     this.state = {};
  //   }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <input type="text" placeholder="Enter a search term" />
            <input type="submit" value="Search" className="" />
          </div>
        </form>
      </div>
    );
  }
}
