import {useState} from "react";
function LoginForm(){
    const [email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[isLoggedIn,setIsLoggedIn]=useState(false);
    const[error,setError]=useState("");

    function handleSubmit(e){
        e.preventDefault();
    
    if(email===""){
        setError("please enter email");
        return;
    }
    if(password ===""){
        setError("please enter password");
        return;
    }
    if(email==="sherin@gmail.com" && password ==="123"){
        setError("");
        setIsLoggedIn(true);
    }else{
        setError("Invalid email or password");
    }
}
function handleLogout(){
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
}
return(
    <div>
        <h1>Login form</h1>
        {isLoggedIn ? (
        <div>
           <h3>WELCOME ,SHERIN ! </h3>
           <button onClick ={handleLogout}>LOGOUT</button>
        </div>
        ):(
            <form onSubmit={handleSubmit}>
                <div><label>EMAIL : </label> <br/>
                <input 
                type ="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <br/>
                <div>
                    <label>PASSWORD : </label><br/>
                <input
                type ="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <br/>
                {error && <p>{error}</p>}
                <button type ="submit"style={{backgroundColor:"blue"}}>LOGIN</button>
            </form>
        )
    }
    </div>
);
}
export default LoginForm;