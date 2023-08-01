import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent Constructor");
    }

    componentDidMount(){
        console.log("Parent compDidMount");
    }
    render(){
        console.log("parent render");
        return(
            <div>
                <h1>About class component</h1>
                <UserContext.Consumer>
                    {({user})=>(
                        <h4 className="font-bold text-xl p-10">{user.name}-{user.email}</h4>
                    )}
                </UserContext.Consumer>
                <h2>This is namaste react web series</h2>
                
                <UserClass name={"First"} location={"Delhi"}/>
                
            </div>
        );
    }
}



export default About;