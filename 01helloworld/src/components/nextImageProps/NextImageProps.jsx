import { React, Component } from "react";

// function NextImageProps({ src = "https://picsum.photos/id/${count}/200/300" ,alt}) {
//   return (
//     <div>
//       <img src={src} alt={alt} />
//     </div>
//   );
// }
class NextImageProps extends Component {
  render() {
    let props = this.props;
    return (
      <div>
        <img src={props.src} alt={props.alt} />
      </div>
    );
  }
}

export default NextImageProps;
