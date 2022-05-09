import Button from "./Button";
import Todo from "./Todo";
import TodoForm from "./Todoform";
import { useState,useEffect } from "react";



const Layout = ({todos,handlecheckboxchange,deletetodo,changedValues,inputValue,submitForm}) => {
    const [currentClass,setClass] = useState(false);
    function openTodoForm(){
         //toggle visibility
        setClass(true)
    }
    function closeTodoForm(){
         //toggle visibility
        setClass(false)
    }
    return ( 
        <div className="container" style={containerStyles}>
        {currentClass && <TodoForm submitForm={submitForm} inputValue={inputValue} changedValues={changedValues} closeTodoForm= {closeTodoForm}/>}
        <div style={boxHolderStyle}>
        <h1 style={{alignSelf:"center"}} >Todo's</h1>
        <div className="todobox" style={todoboxStyles}> 
        {todos.map(todo =>(
          <div className="todoelement" style={todoelementStyles}  id ={todo.id} key={todo.id} >
              <Todo todo={todo} handlecheckboxchange={handlecheckboxchange} deletetodo={deletetodo} />
          </div>
          
        ))}
        <div>
        
      </div>
      <Button func={openTodoForm} name="Add Todo" color="skyblue" top="90%" right="1%"/>
      </div>
      
        </div>
      </div>
     );
}
 

const containerStyles = {
    backgroundColor:"white",
    color:"darkgrey",
    display:"flex",
    justifyContent:"center",
    alignContent:"center",
    minWidth:"100vw",
    minHeight:"100vh"
    
}
const boxHolderStyle={
    backgroundColor:"darkgrey",
    color:"white",
    display:"flex",
    flexDirection:"column",
    alignContent:"center",
    justifyContent:"center",
    alignSelf:"center",
}

const todoboxStyles = {
    backgroundColor:"darkgrey",
    color:"white",
    display:"flex",
    flexDirection:"column",
    minWidth:"50vw",
    minHeight:"50vh",
    position:"relative"
    
}
const todoelementStyles = {
    display:"flex",
    
    
}
export default Layout;

// #0b1545 #0072fa #fdfefe