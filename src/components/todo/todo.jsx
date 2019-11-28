import React, { Component } from 'react';
//import './main.scss';

class ToDo extends Component {

    render() {
        return (
            <div className="toDo">
                <div className="toDo__info">
                    <span className="toDo__info-title">{this.props.title}</span>
                    <span className="toDo__info-desc">{this.props.value}</span>
                </div>
                <div className="toDo__menu">
                    <button className="button button__add" onClick={() => this.props.doneToDo(this.props.title)}>Done</button>
                </div>
            </div>
        )
    }
}

export default ToDo;
