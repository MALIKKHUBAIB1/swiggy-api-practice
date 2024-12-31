import React, { Component } from "react";
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }

  clikckHandler = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrementCount = () => {
    if(this.state.count<=0)return;
    this.setState({ count: this.state.count-1 });
  };
  render() {
    return (
      <>
        <h1>ABout Page{this.state.count}</h1>
        <button onClick={this.clikckHandler}>count</button>
        <button onClick={this.decrementCount}>decrementCount</button>
      </>
    );
  }
}
export default About;
