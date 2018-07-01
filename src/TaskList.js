import React, { Component } from 'react';

class TaskList extends Component {
    constructor(props) {
        super(props);

        this.onTaskComplete = this.onTaskComplete.bind(this);
    }

    onTaskComplete(index) {
        console.log(index);  
        console.log(this.props.list[index] + " " + this.props.list[index].task );
        this.props.deleteTask(index);
    }

    render() {
        return(
            <div className="container">
                <h2>Your Current Task List</h2>

                <ul className="list-group list-group-flush "> { this.props.list.map( (item, index) => 
                    <li key={item.timestamp} 
                            className="list-group-item"
                            onClick={() => this.onTaskComplete(index)  } > {item.task} </li> ) }

                </ul>
            </div>
        );
    }
}

export default TaskList;