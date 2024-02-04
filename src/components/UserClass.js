import React from "react";
class UserClass extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            userInfo: {
                name: "Mr. XYZ",
                location: "Default",
                avatar_url: "No Avatar Image Loaded",
            },
        };
        // console.log(props.name+" Child Constructor");
    }
   async componentDidMount(){
        // console.log(this.props.name+" componentDidMount")
        const data= await fetch("https://api.github.com/users/sibuspd");
        const json = await data.json();
        console.log(json);

        this.setState({userInfo: json,});
    }
render() {
    // console.log(name+" Child Render");
    const {name, location, avatar_url} = this.state.userInfo;
        return (
        <div className="user-card">
            <img className="avatar" src={avatar_url}/>
            <div className="user-details">
                <h2>{name}</h2>
                <h3>{location}, India</h3>
                <h4>@sibuspd</h4>
            </div>
        </div>
        );
    }    
}   
export default UserClass;



