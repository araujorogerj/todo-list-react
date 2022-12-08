import React from "react";
import { useState, useEffect } from "react";
import AddTask from "./Tasks";


const TodoList = () => {
    const [view, setView] = useState (false);

    const onClick = () =>{
        setView(!view);

    }
   
    return(
        <div className="list-container">
            <div className="list-header">
                <div className="list-items">
                    <h1>tasks to complete</h1>
                    <h1>tasks completed</h1>
                    <h1>tasks deleted</h1>
                </div>
                <div className="list-icon">
                <button onClick = {onClick}><i class="fa-solid fa-circle-plus"></i></button>
                </div>

            </div>
            <div className="list-body">
                {view && <AddTask />}
              
            </div>
        </div>
    );
}


export default TodoList