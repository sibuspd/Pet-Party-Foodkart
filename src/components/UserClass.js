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
    }
   async componentDidMount(){
        const data= await fetch("https://api.github.com/users/sibuspd");
        const json = await data.json();
        console.log(json);
        this.setState({userInfo: json,});
    }
render() {
    const {name, location, avatar_url} = this.state.userInfo;
        return (
        <div className="user-card bg-green-100 flex">
            <img className="avatar rounded-2xl w-64 py-1 shadow-2xl" src={avatar_url}/>
            <div className="user-details m-auto text-2xl">
                <h2>{name}</h2>
                <h3>{location}, India</h3>
                <h4>@sibuspd</h4>
            </div>
        </div>
        );
    }    
}   
export default UserClass;



