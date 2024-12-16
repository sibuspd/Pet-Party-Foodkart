import React from "react";
class UserClass extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            userInfo: {
                name: "Uday Chavan",
                location: "Mumbai",
                avatar_url: "No Avatar Image Loaded",
            },
        };
    }
   async componentDidMount(){
        const data= await fetch("https://github.com/chavanuday");
        const json = await data.json();
        console.log(json);
        this.setState({userInfo: json,});
    }
render() {
    const {name, location, avatar_url} = this.state.userInfo;
        return (
        <div className="user-card bg-green-100 flex justify-center">
            <img className="avatar rounded-full w-64 py-1 shadow-2xl" src="https://private-avatars.githubusercontent.com/u/102487324?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQzNzg0MjAsIm5iZiI6MTczNDM3NzIyMCwicGF0aCI6Ii91LzEwMjQ4NzMyNCJ9.Wwlsl686WqTkdZq-IrPfJuXfURVHNbiW3DL6LwPh_HY&v=4"/>
            <div className="user-details m-auto text-2xl">
                <h2>{name}</h2>
                <h3>{location}, India</h3>
                <h4>@chavanuday</h4>
            </div>
        </div>
        );
    }    
}   
export default UserClass;



