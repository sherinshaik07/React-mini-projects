import {useState} from "react";
function LoginLogout(){
   const[isLoggedIn,setIsLoggedIn]=useState(false);
   return(
    <div>
        <h1>LOGIN LOGOUT UI</h1>
        {isLoggedIn ?(
        <div>
            <h2>WELCOME TO THIS PAGE</h2>
            <button onClick={()=>setIsLoggedIn(false)}>
                LOGOUT
            </button>
        </div>):(
        <div>
            <h2>PLEASE LOGIN</h2>
            <button onClick={()=>setIsLoggedIn(true)}>
                LOGIN
            </button>
        </div>)}
    </div>
   );
}
export default LoginLogout;