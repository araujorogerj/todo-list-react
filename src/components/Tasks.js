import React from "react";

const AddTask = (props) =>{
    const {view} = props;

    return(

        <div className="task-container">
            <div className="task-form">
                <input placeholder="Agrega el task"></input>
                <button onClick = {view} >Add</button>
            </div>
        </div>
    );
}

export default AddTask;