import Button from "./Button";
import { useState } from "react";


const TodoForm = ({submitForm,closeTodoForm,changedValues,inputValue}) => {
   
    return ( 
        <div className="todoform" style={formStyles}>
            <span onClick={closeTodoForm} style={closeFormStyles}>X</span>
            <form style={{width:"90%"}}>
                <input value={inputValue} onChange = {(e)=>{changedValues(e)}} className="todoforminput" style={inputStyle} type="text" name="todo" />
                <Button func={submitForm} name="Add" color="skyblue" top="90%" right="1%"/>
            </form>
        </div>
    );
}
const closeFormStyles={cursor:"pointer",position: "relative",textAlign: "center",
    background: "papayawhip", top: "-20px",color:"red",width:"15px",height:"15px",padding:"6px"}
const inputStyle={
    width:"90%",
    height:"30px"
}
const formStyles ={
    background: "#5d6783",
    display: "flex",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
    minWidth: "66vw",
    minHeight: "28vh",
    backdropFilter: "blur(22px) opacity(0.3)",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    padding:"20px 2px"
}

export default TodoForm;