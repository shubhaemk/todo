import React, { Component } from 'react';
//import './main.scss';

class Add extends Component {

    constructor(props){
        super(props);
        this.state = {
            title : '',
            value : ''
        }
    }

    updateInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    render() {
        return (
            <div className="Add">
                <input name="title" onChange={this.updateInput} value={this.state.title}></input>
                <input name="value" onChange={this.updateInput} value={this.state.value}></input>
                <button onClick={() => { this.props.addToDo(this.state.title,this.state.value)}}>Add</button>
            </div>
        )
    }
}

export default Add;
