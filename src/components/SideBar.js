import React from "react";
import { FaTimes } from "react-icons/fa"
const Sidebar = (props) => {
    return (
        <div className={props.sidebar}>
            <FaTimes className="close" onClick={()=>props.setSidebar('sidebar-container-passive')} />
            <ul className="sidebar-list-container">
                <li className="sidebar-list-container-list">HOME</li>
                <li className="sidebar-list-container-list">ABOUT</li>
            </ul>
        </div>
    );
}

export default Sidebar;