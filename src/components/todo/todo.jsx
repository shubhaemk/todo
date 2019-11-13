import React, { Component } from 'react';
//import './main.scss';

class ToDo extends Component {

    render() {
        return (
            <div className="ToDo">
                <h1>{this.props.title}</h1>
                <h3>{this.props.value}</h3>
                <button onClick={()=>this.props.doneToDo(this.props.title)}>Done</button>
            </div>
        )
    }
}

export default ToDo;
