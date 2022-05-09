const Todo = ({todo,handlecheckboxchange,deletetodo}) => {
    return ( 
        
    <>
        <input checked={todo.isCompleted} onChange={handlecheckboxchange} style={{alignSelf:"center",marginRight:"10px"}} type="checkbox" id={todo.id} />
        {todo.isCompleted && <div style={todoStyles}><p><del style={{color:"red"}}>{todo.todo}</del></p><span onClick ={deletetodo} style={todoSpanStyles}>X</span></div>}
        {!todo.isCompleted && <div style={todoStyles}><p>{todo.todo}</p><span onClick ={deletetodo} style={todoSpanStyles}>X</span></div>}
    </>
      
     );
}
 
const todoStyles = {
    display:"flex",
    alignItems:"center"
}
const todoSpanStyles = {
    marginLeft:"20px",
    color:"red",
    cursor:"pointer"
}
export default Todo;