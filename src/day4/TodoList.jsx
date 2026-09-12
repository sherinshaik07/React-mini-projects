import { useState} from "react";
function TodoList(){
   
    const [todos,setTodos]=useState([
        "Learn React",
        "practice Java",
        "Learn HTML"
    ]);
    const [newTodo,setNewTodo]=useState("");
function addTodos(){
    if(newTodo===""){
        return;
    }
    setTodos([...todos,newTodo]);
    setNewTodo("");
   }
function deleteTodo(index){
    const updatedTodos = todos.filter((todo,i)=>i!=index);
    setTodos(updatedTodos);
}
    return(
        <div>
            <h1 style={{color:"red"}}>TODO LIST </h1>
            <input 
            type ="text"
            placeholder="Enter your task"
            value={newTodo}
            onChange={(e)=>setNewTodo(e.target.value)}/>
            <button onClick ={addTodos}>ADD</button>
            {todos.map((todo,index)=>(<h3 key ={index}>{todo}
            <button onClick ={()=>deleteTodo(index )}>DELETE</button></h3>))}
        </div>
    );
}
export default TodoList;