import Layout from "./components/layout";
import { useState,useEffect } from "react";



function App() {
  //tracks todo datas
  const [todos,setTodos] = useState([]);
useEffect(()=>{console.log("data changed")},[todos])

const [inputValue,setInputValue] = useState("");

function handleCheckBoxChange(e){

  let updatedTodo = [];
  todos.forEach(todo=>{
    if(todo.id == e.target.id){
      todo.isCompleted= !todo.isCompleted;
    }
    updatedTodo.push(todo)
   })
  //  console.log(updatedTodo)
  setTodos(updatedTodo)
}
//delete todo 
function deleteTodo(e){
  const newTodoState = todos.filter((todo)=> todo.id != e.target.parentElement.parentElement.id )
  setTodos(newTodoState);
}
//submit form
function submitForm(e){
  e.preventDefault();
  const id = todos.length +1;
  todos.push({id,isCompleted:false,todo:inputValue});
  setInputValue("")
    
}
//get input value

function changedValues(e){
    setInputValue(e.target.value);
}
  return (
    <div className="App">
      
     <Layout todos = {todos} changedValues={changedValues} inputValue={inputValue} submitForm={submitForm} handlecheckboxchange={handleCheckBoxChange} deletetodo={deleteTodo}/>
    
    </div>
  );
}

export default App;

