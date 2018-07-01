import React, { Component } from 'react';

class TaskList extends Component {


    constructor(props) {
        super(props);

        this.onTaskComplete = this.onTaskComplete.bind(this);
        this.remove = this.remove.bind(this);
    }

    onTaskComplete(e) {
        e.preventDefault();
        const key = e.target.timestamp;

        this.remove(key);
    }

    remove(key) {
        this.props.list[key] == null;
    }

    render() {
        return(
            <div className="container">
                <h2>Your Current Task List</h2>

                <ul> {this.props.list.map((item) => (            
                        <li key={item.timestamp.toString()} className="bg-success text-white">
                            <form className="form-group">
                                <input 
                                    name="status"
                                    type="checkbox"
                                    checked={item.checked}
                                    onChange={this.onTaskComplete}
                                />
                                <label name="task" >{item.task}</label>
                                <br/>
                                <label name="timestamp" >{item.timestamp.toString()}</label>
                            </form>
                        </li>
                        )) }

                </ul>
            </div>
        );
    }
}

export default TaskList;