import React, { Component } from "react";
import Image from "./Image";

export default class ImageList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Image />
        <Image />
        <Image />
      </div>
    );
  }
}
