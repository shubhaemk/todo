import React, { Component } from 'react';

import model from '../config/model';

import ToDo from '../components/todo/todo';
import Add from '../components/add/add';

class App extends Component{

  constructor(){
    super();
    this.state = model;
  }

  /* componentDidUpdate = () => {
    console.log(this.state.tdTitle);
    console.log(this.state.tdValue);
  } */

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
      addPrompt : !this.state.addPrompt
    })
    )
  }

  doneToDo = (title) => {
    let tempTdTitle = {...this.state.tdTitle};
    let tempTdValue = {...this.state.tdValue};
    
    delete tempTdValue[tempTdTitle[title]];
    delete tempTdTitle[title];

    this.setState({
      tdTitle : tempTdTitle,
      tdValue : tempTdValue
    });
  }

  render(){
    return(
      <div className="todo">
        <div className="todo__list">
          <div className="title">
            <span className="title__name">To Do :)</span>
            <a href="https://github.com/shubhaemk" target="__blank" className="title__info">By Shubham Kamath</a>
          </div>
          <div className="list">
            {
              Object.keys(this.state.tdTitle).length ? (
                Object.keys(this.state.tdTitle).map((title) => {
                  let key = this.state.tdTitle[title];
                  return (
                    <ToDo doneToDo={this.doneToDo} key={key} title={title} value={this.state.tdValue[key]}></ToDo>
                  )
                })
              ) :
                <div className="empty">
                  <span className="empty__text">You're all done!</span>
                </div>
            }
          </div>
        </div>
        <div className="todo__menu">
          <div className="todo__menu_prompt">
            {
              this.state.addPrompt ? <Add addToDo={this.addToDo}></Add> : ''
            }
          </div>
          <div className="todo__menu_button">
            <button className="button button__add" onClick={() => this.addPrompt()}>
              {this.state.addPrompt ? 'Cancel' : 'Add'}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
