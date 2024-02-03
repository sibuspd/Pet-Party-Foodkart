import React from "react";
class UserClass extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            count: 0,
        };
        console.log(props.name+" Child Constructor");
    }
    componentDidMount(){
        console.log(this.props.name+" componentDidMount")
    }
render() {
    const {name, location} = this.props;
    const {count} = this.state;
    console.log(name+" Child Render");
    return (
        <div className="user-card">
            <h1>Count = {count}</h1>
            <button onClick={() =>{
                this.setState({count: this.state.count + 1,});
            }}>Count++</button>
            <button onClick={() =>{
                this.setState({count: this.state.count - 1,});
            }}>Count--</button>  
            <h2>Name: {name}</h2>
            <h3>Locations: {location}</h3>
            <h4>Contact: @sibuspd</h4>
        </div>
        );
    }    
} 
export default UserClass;




