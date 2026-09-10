import {useState} from "react";
function CharacterCounter(){
    const [text,setText] = useState("");
    return(
        <div>
            <h1>CHARACTER COUNTER</h1>
            <h2>ENTER A TEXT HERE </h2>
            <input 
            type ="text"
            value={text}
            onChange={(e)=>setText(e.target.value)}/>
            <h3>CHARACTERS LENGTH={text.length}</h3>
        </div>
    );
}
export default CharacterCounter;