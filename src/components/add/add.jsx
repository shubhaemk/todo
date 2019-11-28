import React, { Component } from 'react';
//import './main.scss';

class Add extends Component {

    constructor(props){
        super(props);
        this.state = {
            title : '',
            value : '',
        }
    }

    updateInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <div className="add">
                <div className="add__input moveInRight">
                    <div className="input">
                        <span className="input__title">Title</span>
                        <input className="input__add" name="title" value={this.state.title} onChange={this.updateInput}></input>
                    </div>
                    <div className="input">
                        <span className="input__title">Description</span>
                        <input className="input input__add" name="value" value={this.state.value} onChange={this.updateInput}></input>
                    </div>
                </div>
                <div className="add__button moveInBottom">
                    <button className="button button__add" onClick={() => { this.props.addToDo(this.state.title, this.state.value) }}>Add</button>
                </div>
            </div>
        )
    }
}

export default Add;
