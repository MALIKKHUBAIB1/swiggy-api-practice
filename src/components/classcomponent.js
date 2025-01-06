import React, { Component } from "react";
import User1Class from "./user1Class";

class UserClass extends Component {
  constructor(props) {
    console.log("parent constructor ");
    super(props);
  }
  componentDidMount() {
    console.log("parent did mount");
  }
  render() {
    console.log("parent render ");
    const { name, location } = this.props;
    return (
      <div className="w-full text-center text-lg">
        this is class based components
        <h1 className="">{name}</h1>
        <h2>{location}</h2>
        <User1Class name={"first"} />
        <User1Class name={"second"} />
        <User1Class name={"third"} />
      </div>
    );
  }
}
export default UserClass;

// parent constructor will run
// parent render
// first child constructor will run
// first child render will runn
// second constructor will run
// second render will run
// component didmount will run of the first child
// component didmount will run of the second child
// parent did mount will run
