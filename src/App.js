import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TaskList from './TaskList';

/*
- display text input for user where they can write a task
- button beside input to submit into list of to-do items
- blank items should not be added (press "add" w/o writing a task)
- list can have 0 to many items
- each list item must have a checkbox
- checkbox = remove from list
*/



class App extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      task: '',
      taskItems: []
    }
   
    this.addTask = this.addTask.bind(this);
    this.onTextChange = this.onTextChange.bind(this);

  }
  
  addTask(e) {
    e.preventDefault();
    let item = {};

    if( this.state.task !== '' &&  this.state.task.length > 0 ) {
      item = {
        checked: false,
        task: this.state.task,
        timestamp: new Date()
      };


      // get current todo list
      const currentList = this.state.taskItems;
      currentList.push(item);

      // add to list
      this.setState({
        taskItems: currentList
      })

    } 

    console.log("in submit");
  }

  onTextChange(e) {
    // console.log(e.target);
    // keeping this here just in case I want to expand the form
    // const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    
    const name = e.target.name;
    const value = e.target.value;   

    this.setState({
      [name]: value
     });
  }

  
  render() {
    return (
      
      <div className="App">
      
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ToDo</h1>
        </header>
      
      <div className="container">
        
        <div className="row">         

          <div className="col">
            <h3>Add a Task Below</h3>
            <form onSubmit={this.addTask} className="form-group">
            <input 
              name="task" 
              value={this.state.task} 
              onChange={this.onTextChange}
              type="text"
              placeholder="Enter task" />

            <button 
              type="submit" 
              className="btn btn-primary">Add</button>

            </form>
          </div> 
        </div>



        <div className="row">
          <div className="col">
            <TaskList list={this.state.taskItems}   />
          </div>       
        </div>
        
      </div>
    </div>
    );
  }
}

export default App;
