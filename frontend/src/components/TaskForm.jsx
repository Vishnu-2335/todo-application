import { useState } from "react";
import { createTask } from "../services/api";

function TaskForm({ refreshTasks }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title.trim() === "" || description.trim() === "") {
      alert("Please fill all fields");
      return;
    }

    const newTask = {
      title: title,
      description: description,
      completed: false,
    };

    try {
      await createTask(newTask);

      setTitle("");
      setDescription("");

      refreshTasks();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="task-form">
      <h2>Create Task</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Enter task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default TaskForm;