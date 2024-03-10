import React from 'react';
import ReactDOM from 'react-dom/client';

let heading = React.createElement("h1", {}, "Hello world from REACT from File");
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

// Lets create another div with id root2 and add multiple children of it using React.createElement

// React.createElement return a react element which is basically a js object
let heading2 = React.createElement(
  "div",
  {id: "root2"},
  React.createElement(
    "div",
    {id: "parent"},
    React.createElement(
      "div",
      {id: "child"},
      [  
        React.createElement(
        "h2",
        {},
        "I am heading h2 from another div"
      ), 
        React.createElement(
        "h3",
        {},
        "I am heading h3 sibling of h2"
      )
    ]
    )
  )
)

// JSX
// Creating react element using core React package - React.createElement is very complex. That is why we use JSX to create react element

let heading3 = <h3>This is heading 3</h3>
// Heading 3 is a react element(js onject) which we can render on the DOM

console.log("heading 3", heading3)


// root.render basically convert this js object into html to get rendered into the DOM
// there can only be one root
root.render(heading3)
