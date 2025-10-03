import React from "react";
import Avatar from "./Avatar";

function Userinfo({ user }){
    return(
        <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
            <Avatar src = {user.avatarUrl} alt={user.name}/>
            <span>{user.name}</span>
        </div>
    )
}

export default Userinfo