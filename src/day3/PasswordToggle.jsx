import {useState} from 'react';
function PasswordToggle(){
    const[password,setPassword]=useState("")
    const[showPassword,setShowPassword]=useState(false);
    return(
        <div>
            <h1>ENTER YOUR PASSWORD</h1>
            <input
            type={showPassword?"text":"password"}
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            <button onClick={()=>setShowPassword(!showPassword)}>
                {showPassword ?"HIDE":"SHOW"}
            </button>
        </div>
    );

}
export default PasswordToggle;