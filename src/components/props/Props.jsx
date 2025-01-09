import { Component } from "react";
class Welcome extends Component {
  render() {
    return (
      <div>
        <h1>
          Welcome {this.props.name} a.k.a {this.props.heroName}
        </h1>
        {this.props.children}
      </div>
    );
  }
}
function Props({ name, children }) {
  return (
    <div>
      <Welcome name="uzair" heroName="Ahmed"><p>Me children hu or Welcome component se aaya hu</p></Welcome>
      <h1>Hello {name}</h1>
    </div>
  );
}

export default Props;
