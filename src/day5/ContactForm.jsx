import { useState } from "react";
function ContactForm(){
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[subject,setSubject]=useState("");
    const[message,setMessage]=useState("");
    const[error,setError]=useState("");
    const[success,setSuccess]=useState("");
    function handleSubmit(e){
        e.preventDefault();
        setError("");
        setSuccess("");
        if(name===""){
            setError("please enter your name");
            return;
        }if(email===""){
            setError("please enter your email");
            return;
        }if(subject===""){
            setError("please enter the subject");
            return;
        }if(message===""){
            setError("please enter your message");
            return;
        }
        setSuccess("Message successfully sent");
       setName("");
       setEmail("");
       setSubject("");
       setMessage("");
    }
    return(
        <div>
            <h1>CONTACT FORM</h1>
            <form onSubmit={handleSubmit}>
                <div><label>NAME : </label>
                <input 
                type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)}/>
                </div><br/>
                <div>
                    <label>EMAIL : </label>
                    <input 
                    type ="email"
                    value = {email}
                    onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <br/>
                <div>
                    <label>SUBJECT : </label>
                    <input
                    type="text"
                    value={subject}
                    onChange={(e)=>setSubject(e.target.value)}/>
                </div>
                <br/>
                <div>
                    <label>MESSAGE : </label>
                    <textarea
                    placeholder="enter message"
                    value={message}
                    onChange={(e)=>setMessage(e.target.value)}/>
                    <p>CHARACTERS : {message.length}</p>
                </div>
                <br/>
                {error && <p>{error}</p>}
                {success && <p>{success}</p>}
                <button type ="submit" style={{background:"blue"}}>Send Message </button>
            </form>
        </div>
    );
    
}
export default ContactForm;