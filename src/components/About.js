import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext"; 

class About extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
  }
  render(){    
    return (
      <div className="bg-slate-300">
        <div>Info: <UserContext.Consumer>
          {({loggedInUser}) => <span className=" text-md font-bold">{loggedInUser}</span>}
          </UserContext.Consumer></div>
        <h2>Welcome to Pet Party</h2>
        <h4>We make online food deliveries in Sambalpur</h4>
        <UserClass name={"First Child"} location={"SAMBALPUR"}/>
        <h3>An Initiative by Pet Nutrition Private Limited</h3>     
      </div>
    )
  };
}
export default About;
