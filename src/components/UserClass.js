import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
       // console.log(this.props.name+ " Child Constructor");

        this.state={
            userInfo:{
                name: "Dummy",
                location: "Default",
            }
        };
    }
async componentDidMount(){
   // console.log(this.props.name+" Child compDidMount");
   const data=await fetch("https://api.github.com/users/akshaymarch7");
   const json= await data.json();
   console.log(json);

   this.setState({
    userInfo:json,
   })
}
    render(){
        //console.log(this.props.name+" Child render");
        const {name,location,avatar_url}=this.state.userInfo
        return(
            <div className="user-class">
            <img src={avatar_url}></img>
                <h2>Name : {name}</h2>
                <h2>Location: {location}</h2>
            </div>
        )
    }
}

export default UserClass;