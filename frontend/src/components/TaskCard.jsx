import { updateTaskStatus, deleteTask } from "../services/api";

function TaskCard({ task, refreshTasks }) {
  const handleCheckboxChange = async () => {
    await updateTaskStatus(task.id, !task.completed);
    refreshTasks();
  };

  const handleDelete = async () => {
    await deleteTask(task.id);
    refreshTasks();
  };

  return (
    <div className="task-card">
      <div className="task-header">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleCheckboxChange}
        />
        <button className="delete-btn" onClick={handleDelete}>
          Delete
        </button>
      </div>

      <h3>{task.title}</h3>
      <p>{task.description}</p>
    </div>
  );
}

export default TaskCard;