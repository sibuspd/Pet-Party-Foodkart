import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => ( <h1 id="heading" className="head" tabIndex="1">
    Biku Bhanja Bane Bane  </h1>
    );

const HeadingComponent = () => ( 
<div id='container'>
    {Title()}
    <Title />
    <Title></Title>
    <h2 className="hoding"> Namo Functional React Unit </h2> 
</div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));    
root.render(<HeadingComponent></HeadingComponent>);  
console.log(HeadingComponent);