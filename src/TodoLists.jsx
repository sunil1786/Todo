import React from "react";

const TodoLists = (props)=>{
    
    return (
        
        <>
        <div className="div_style">
        <button className="delete"
        onClick={() => {
            props.onSelect(props.id);

        }}>*</button>

        <li>{props.text}</li>
        </div>

        </>
    )
};

export default TodoLists;