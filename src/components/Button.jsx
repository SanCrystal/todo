const Button = ({func,name,color,top,right}) => {
    return ( 
        <button onClick={func} style={{backgroundColor:color,borderRadius:"8px",marginRight:"0%",position:"absolute", top:top,right:right,padding:"5px 10px 5px 10px",color:"white",border:"0px solid skyblue",boxShadow:"1px 1px 4px black",cursor:"pointer"}}>{name}</button>
     );
}


export default Button;