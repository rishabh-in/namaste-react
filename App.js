let heading = React.createElement("h1", {}, "Hello world from REACT from File");
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

// Lets create another div with id root2 and add multiple children of it using React.createElement

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

// React.createElement return a react element which is basically a js object
// root.render basically convert this js object into html to get rendered into the DOM
// there can only be one root

root.render(heading2)
