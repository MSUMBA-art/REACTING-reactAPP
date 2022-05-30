import React from "react";
import Heading from "./Heading";
import List from "./List";
import HeadingOne from "./HeadingOne";
import NameCopyright from "./NameCopyright";
import pi, { doublePI, triplePI } from "./math";
//import "./styles.css";

function App() {
  return (
    <div>
      <HeadingOne />
      <Heading />
      <List />
      <ol>
        <li>{ pi}</li>
        <li>{doublePI()}</li>
        <li>{triplePI()}</li>
      </ol>
      <math />
      <NameCopyright />
    </div>
  );
}

export default App;
