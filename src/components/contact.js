import React from "react";

function Contact() {
  return (
    <div className="w-3/12 m-auto ">
      <h1 className="text-center text-3xl text-slate-500">contact us</h1>
      <input placeholder="enter your name" type="text" />
      <input placeholder="enter your email" type="email" />
      <button type="button" className="w-36 border-2 border-slate-950 mx-9">
        Submit
      </button>
    </div>
  );
}

export default Contact;
