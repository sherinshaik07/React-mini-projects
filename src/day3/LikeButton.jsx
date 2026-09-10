import React from "react";
import {useState} from "react";
function LikeButton(){
    const [Like,setLike]=useState(0);
    return(
        <div>
            <h1>LIKE BUTTON  </h1>
            <h2>LIKE :{Like}</h2>
            <button onClick ={()=>setLike(Like+1)}>LIKE</button>
        </div>
    );
}
export default LikeButton;
