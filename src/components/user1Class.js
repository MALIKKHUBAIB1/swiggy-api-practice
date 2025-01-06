import React, { Component } from "react";

class User1Class extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.name, " class chiildren constructor");
  }
  componentDidMount() {
    console.log(this.props.name, " class did mount ");
  }
  render() {
    console.log(this.props.name, " class chiildren render");

    return <div>user1Class</div>;
  }
}

export default User1Class;
