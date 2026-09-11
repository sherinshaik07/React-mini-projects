import { useState} from "react";
function TodoList(){
   
    const [todos,setTodos]=useState([
        "Learn React",
        "practice Java",
        "Learn HTML"
    ]);
    return(
        <div>
            <h1>TODO LIST </h1>
            {todos.map((todo,index)=>(<h3 key ={index}>{todo}</h3>))}
        </div>
    );
}
export default TodoList;