import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import TaskDisplay from '../TaskDisplay'

import './index.css'

class TaskManager extends Component {
  state = {
    searchInput: '',
    displayList: [],
    isCompleted: false,
  }

  onAddTaskItem = () => {
    const {searchInput} = this.state
    const newItem = {
      id: uuidv4(),
      task: searchInput,
    }
    this.setState(prevState => ({
      displayList: [...prevState.displayList, newItem],
      searchInput: '',
    }))
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onDeleteTask = id => {
    const {displayList} = this.state

    const updatedList = displayList.filter(eachTask => eachTask.id !== id)

    this.setState({
      displayList: updatedList,
    })
  }

  onCompleteTask = () => {
    const {isCompleted} = this.state
    this.setState(prevState => ({
      isCompleted: !prevState.isCompleted,
    }))
  }

  render() {
    const {searchInput, displayList, isCompleted} = this.state

    return (
      <div className="task-manager-container">
        <h1 className="task-heading">Task Manager</h1>
        <div className="total-tasks-container">
          <div className="task-taking-container">
            <h1 className="task-taking-heading">Create a Task</h1>
            <label className="label" htmlFor="task">
              Task
            </label>
            <input
              type="text"
              id="task"
              className="task-input"
              placeholder="Please Enter the Task"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
            <button
              type="button"
              className="task-button"
              onClick={this.onAddTaskItem}
            >
              Add Task
            </button>
          </div>
          <div className="task-display-container">
            <h1 className="task-display-heading">List of Tasks</h1>
            <ul className="display-tasks-container">
              {displayList.map(eachTask => (
                <TaskDisplay
                  key={eachTask.id}
                  taskdetails={eachTask}
                  onDeleteTask={this.onDeleteTask}
                  isCompleted={isCompleted}
                  onCompleteTask={this.onCompleteTask}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default TaskManager
