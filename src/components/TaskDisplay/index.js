import './index.css'

const TaskDisplay = props => {
  const {taskdetails, onDeleteTask, isCompleted, onCompleteTask} = props
  const {id, task} = taskdetails

  const onClickDeleteButton = () => {
    onDeleteTask(id)
  }

  const onClickCompleteButton = () => {
    onCompleteTask(id)
  }

  const updatedClassName = isCompleted ? 'text-file' : ''
  console.log(updatedClassName)

  return (
    <li className="task-item">
      <p className={`task ${updatedClassName}`}>{task}</p>
      <div className="button-container">
        <button
          type="button"
          className="button"
          onClick={onClickCompleteButton}
        >
          Completed
        </button>
        <button type="button" className="button" onClick={onClickDeleteButton}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TaskDisplay
