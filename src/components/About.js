import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props){
    super(props);
    // console.log("Parent Constructor");
  }
  componentDidMount(){
    // console.log("Parent componentDidMount");
  }
  render(){
    // console.log("Parent Render");    
    return (
      <div>
        <h1>About Us</h1>
        <h2>Welcome to Pet Party</h2>
        <h4>We make online food deliveries in Sambalpur</h4>
        <UserClass name={"First Child"} location={"SAMBALPUR"}/>
        <h3>An Initiative by Golu Foods Private Limited</h3>     
      </div>
    )
  };
}
export default About;
