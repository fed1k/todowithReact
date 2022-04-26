import React from "react";
import { FaBars, FaPlus } from 'react-icons/fa';
import Sidebar from "./SideBar";

class Todo extends React.Component {
    constructor(props){
        super(props),
        this.state = {
            class: 'sidebar-container-passive',
            title:''
        }
        this.sideBarToggler = this.sideBarToggler.bind(this)
        this.dataHandler = this.dataHandler.bind(this)
    }
    sideBarToggler(){
        if(this.state.class === 'sidebar-container-passive'){
            this.setState({class: 'sidebar-container-active'})
        }else{
            this.setState({class: 'sidebar-container-passive'})
        }
    }

    dataHandler(e){
        if(e.key === 'Enter'){
            e.preventDefault();
            this.setState({title: e.target.value})
        }
    }
    
    render(){
        return (
            <div className="main">
                <Sidebar sidebar={this.state.class} setSidebar={this.sideBarToggler}/>
                <FaBars className="hamburger" onClick={this.sideBarToggler}/>
                <h1>todos</h1>
                <form className="form" action="post">
                    <input type="text" name="" id="textInput" placeholder="Add todo..." onKeyPress={this.dataHandler} />
                    <FaPlus className="plus"/>
                </form>
                <ul>
                    <li>{this.state.title}</li>
                </ul>
            </div>
        );
    }
}

export default Todo;