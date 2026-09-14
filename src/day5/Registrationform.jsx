import {useState} from "react";
function Registrationform(){
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[age,setAge]=useState("");
    const[gender,setGender]=useState("");
    const[course,setCourse]=useState("");
    const[agree,setAgree]=useState(false);
    const[error,setError]=useState("");
    function handleSubmit(e){
        e.preventDefault();
        if(name==="" || email==="" || password==="" || age==="" || gender==="" || course===""){
            setError("PLEASE FILL THIS");
            return;
        }if(!agree){
            setError("please agree with terms and conditions");
            return;
        }
        //if everything is valid
        setError("");
        alert("REGISTRATION SUCCESSFULL");
        //reset form
        setName("");
        setEmail("");
        setPassword("");
        setAge("");
        setGender("");
        setCourse("");
        setAgree(false);
    }
    return(
        <div>
           <h1>REGISTRATION FORM </h1>
           <form onSubmit={handleSubmit}>
            <div><label>NAME : </label>
            
           <input 
           type="text"
           value={name}
           placeholder="Enter name"
           onChange={(e)=>setName(e.target.value)}
           />
           </div>
           <div><label>EMAIL :  </label>
           <input
           type="email"
           value={email}
           placeholder="Enter email"
           onChange={(e)=>setEmail(e.target.value)}
           />
           </div>
           <div><label>PASSWORD :   </label>
           <input
           type="password"
           value={password}
           placeholder="Enter password"
           onChange={(e)=>setPassword(e.target.value)}
           />
           </div>
           <div><label>AGE  :</label>
           <input
           type="number"
           value={age}
           placeholder="Enter age"
           onChange={(e)=>setAge(e.target.value)}
           />
           </div>
           <div><label>GENDER : </label>
           <input
           type="radio"
           name="gender"
           value="Male"
           checked={gender ==="Male"}
           onChange={(e)=>setGender(e.target.value)}
           />MALE
           <input
           type="radio"
           name="gender"
           value="Female"
           checked={gender ==="Female"}
           onChange={(e)=>setGender(e.target.value)}
           />FEMALE
           </div>
           <br/>
           <div>
            <label>COURSE  :  </label>
            <select 
            value={course}
            onChange={(e)=>setCourse(e.target.value)}>
            <option value = "">SELECT COURSE</option>
            <option value = "CSE">CSE</option>
            <option value = "ECE">ECE</option>
            <option value = "EEE">EEE</option>
           </select>
            </div>
            <div>
                <input 
                type="checkbox"
                checked={agree}
                onChange={(e)=>setAgree(e.target.value)}/>
                I AGREE TO TERMS AND CONDITIONS
            </div>
            {error && <p>{error}</p>}
            <button type = "submit" style={{color:"white",backgroundColor:"blue"}}>REGISTER</button>
           
        </form>
        </div>
    );
    
}
export default Registrationform;