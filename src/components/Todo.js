import React, { useState } from "react";
import { FaBars, FaPlus } from 'react-icons/fa';
import Sidebar from "./SideBar";

const Todo = () => {
    const [sidebar, setSidebar] = useState('sidebar-container-passive');

    const sideBarToggler = ()=>{
        setSidebar('sidebar-container-active')
    }

    return (
        <div className="main">
            <Sidebar sidebar={sidebar} setSidebar={setSidebar}/>
            <FaBars className="hamburger" onClick={sideBarToggler}/>
            <h1>todos</h1>
            <form className="form" action="post">
                <input type="text" name="" id="textInput" placeholder="Add todo..." one/>
                <FaPlus className="plus"/>
            </form>
            <ul>
            </ul>
        </div>
    );
    
}

export default Todo;