import React, { useState } from "react";

function Contact() {
  const [arr, setArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const NewFunction = HigherOrdFunction();
  return (
    <div className="w-3/12 m-auto ">
      <h1 className="text-center text-3xl text-slate-500">contact us</h1>
      <input placeholder="enter your name" type="text" />
      <input placeholder="enter your email" type="email" />
      <button type="button" className="w-36 border-2 border-slate-950 mx-9">
        Submit
      </button>
      {arr.map((num, i) => (
        <div key={i}>{num % 2 === 0 ? <NewFunction num={num} /> : num}</div>
      ))}
    </div>
  );
}
function HigherOrdFunction(arr) {
  return (props) => {
    return <div>even no {props.num}</div>;
  };
}
export { HigherOrdFunction };

export default Contact;
