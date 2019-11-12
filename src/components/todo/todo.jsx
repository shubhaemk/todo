import React, { Component } from 'react';
//import './main.scss';

class ToDo extends Component {

    render() {
        return (
            <div className="ToDo">
                <h1>{this.props.title}</h1>
                <h3>{this.props.value}</h3>
            </div>
        )
    }
}

export default ToDo;
