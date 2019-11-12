import React, { Component } from 'react';
import './main.scss';

import model from '../config/model';

import ToDo from '../components/todo/todo';
import Add from '../components/add/add';

class App extends Component{

  constructor(){
    super();
    this.state = model;
  }

  addPrompt = () =>{
    this.setState({
      addPrompt : !this.state.addPrompt
    })
  }

  addToDo = (title,value) => {
    let tempTdTitle = { ...this.state.tdTitle, [title]: Math.floor(Math.random() * 1000) + 1  };
    let tempTdValue = { ...this.state.tdValue, [tempTdTitle[title]] : value };

    this.setState({
      tdTitle : {...tempTdTitle},
      tdValue : {...tempTdValue}
    },
    this.setState({
      addPrompt: !this.state.addPrompt
    }))

  }

  render(){
    return(
      <div className="App">
        <button onClick={this.addPrompt}>
          {this.state.addPrompt ? 'Cancel' : 'Add'}
        </button>
        {
          this.state.addPrompt ? <Add addToDo = {this.addToDo}></Add> : ''
        }
        {
          Object.keys(this.state.tdTitle).map((title) => {
            let key = this.state.tdTitle[title];
            return (
              <ToDo key = {key} title = {title} value = {this.state.tdValue[key]}></ToDo>
            )
          })
        }
      </div>
    )
  }
}

export default App;
