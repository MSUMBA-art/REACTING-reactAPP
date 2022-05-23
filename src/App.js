import React from "react";
import "./styles.css";


const name = {
  fName: "Alexander",
  lName: "Msumba"
};

const currentDate = new Date();
const year = currentDate.getFullYear();
const date = new Date();
const currentTime = date.getHours();
let greetings;

const customStyle = {
  color: ""
}

if (currentTime < 12) {
  greetings = "Good Morning"
  customStyle.color = "red"
} else if (currentTime < 18) {
  greetings = "good afternoon"
  customStyle.color = "yellow"
} else {
  greetings = "Good Evening"
  customStyle.color = "purple"
}

  



function App() {
  return (
    <div >
      
      <h1 className="heading" style={customStyle}>{greetings}</h1>
      <h3>Welcome to Alexander's Favorite Food</h3>
      <ul>
        <li>Salad</li>
        <li>Pasta</li>
        <li>Fruits</li>
      </ul>
      <p>Created by {name.fName + " " + name.lName}</p>
      <p>All Rights Reserved {year}</p>
    </div>
  );
}

export default App;

//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

