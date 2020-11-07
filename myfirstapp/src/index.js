import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
ReactDOM.render(
  <React.StrictMode>
    <App />,
  </React.StrictMode>,
  document.getElementById("root")
);
//import React, { useState } from 'react';
//import ReactDOM from 'react-dom';
//const LogForm = () => {
//const [name,setName] = useState('');
//function handleSubmit(event) {
//event.preventDefault();
//alert('A name was submitted: ' + name);
//}
// return (
// <form onSubmit={(e) => handleSubmit(e)}>
// <label>
//  Name:
// <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
// </label>
// <input type="submit" value="Submit" />
// </form>
//);
//}
//ReactDOM.render(<LogForm />,document.getElementById('root'));
