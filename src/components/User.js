import { useState } from "react";
const User=({name})=>{
    const [count]=useState(0);
    return(
        <div className="user-card">
        <h2>Count:{count}</h2>
            <h2>Name:{name}</h2>
            <h2>Location:Delhi</h2>
            <h2>Contact:Samarthdua1256@gmail.com</h2>
        </div>
    );
};

export default User;