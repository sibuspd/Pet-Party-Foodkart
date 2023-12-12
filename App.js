/* <div id='parent'>
    <div id="child">
        <h1> I'm the grandson</h1>
        <h2> I'm the ultra grandson </h2>
    </div>
    <div id="child 2">
        <h1> I'm the 2nd grandson</h1>
        <h2> I'm the 2nd ultra grandson </h2>
    </div>
</div> */
import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "This is Namo ReactION 🐴"), React.createElement("h2", {}, "I'm the ultra grandson")]),React.createElement("div", { id: "child 2" },
        [React.createElement("h1", {}, "I'm the 2nd grandson"), React.createElement("h2", {}, "I'm the 2nd ultra grandson")])]);
console.log(parent); // object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

// We will use JSX later on