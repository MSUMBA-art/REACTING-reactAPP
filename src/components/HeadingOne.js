import React from "react";

const date = new Date();
const currentTime = date.getHours();

let greetings;

const customStyle = {
  color: "",
};

if (currentTime < 12) {
  greetings = "Good Morning";
  customStyle.color = "#bf0b11";
} else if (currentTime < 18) {
  greetings = "good afternoon";
  customStyle.color = "#050652";
} else {
  greetings = "Good Evening";
  customStyle.color = "#fc0f17";
}


function HeadingOne() {
    return (
      <div>
        <h1 className="heading" style={customStyle}>
          {greetings}
        </h1>
      </div>
    );
}

export default HeadingOne;