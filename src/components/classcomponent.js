import React, { Component } from "react";
import User1Class from "./user1Class";

class UserClass extends Component {
  constructor(props) {
    console.log("parent constructor ");
    super(props);
    this.state = {
      todo: [],
    };
  }
  async getData() {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos");
    const json = await data.json();
    this.setState({ todo: json });
    console.log(json);
  }
  componentDidMount() {
    console.log("parent did mount");
    this.getData();
  }

  render() {
    console.log("parent render ");
    console.log(this.state.todo);

    const { name, location } = this.props;
    return (
      <div className="w-full text-center text-lg">
        this is class based components
        <h1 className="">{name}</h1>
        <div className="w-[80%] my-10 m-auto">
          {this.state.todo.slice(100).map((todo) => {
            return (
              <h1 key={todo.id} className="border border-sky-500 m-2 p-4 text-start ">
                {todo.title}
              </h1>
            );
          })}
        </div>
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
