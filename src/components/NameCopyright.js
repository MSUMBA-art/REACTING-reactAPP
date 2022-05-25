import React from "react";



const name = {
  fName: "Alexander",
  lName: "Msumba",
};

const currentDate = new Date();
const year = currentDate.getFullYear();

function NameCopyright() {
    return (
      <div>
        <p>Created by {name.fName + " " + name.lName}</p>
        <p>All Rights Reserved {year}</p>
      </div>
    );
}

export default NameCopyright;