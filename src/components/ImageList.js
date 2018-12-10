import React, { Component } from "react";
import ImageCard from "./ImageCard";
import "./ImageList.css";

// export default class ImageList extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {};
//   }

//   render() {
//     return (
//       <div>
//         <Image />
//         <Image />
//         <Image />
//       </div>
//     );
//   }
// }
const ImageList = props => {
  const images = props.images.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;
