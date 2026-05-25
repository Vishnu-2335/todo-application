import { useEffect, useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskCard from "./components/TaskCard";
import { getTasks } from "./services/api";

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await getTasks();
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const inProgressTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className="app-container">
      <h1>To-Do List Application</h1>

      <TaskForm refreshTasks={fetchTasks} />

      <div className="task-sections">
        <div className="section">
          <h2>In Progress</h2>
          {inProgressTasks.length > 0 ? (
            inProgressTasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                refreshTasks={fetchTasks}
              />
            ))
          ) : (
            <p>No tasks in progress</p>
          )}
        </div>

        <div className="section">
          <h2>Completed</h2>
          {completedTasks.length > 0 ? (
            completedTasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                refreshTasks={fetchTasks}
              />
            ))
          ) : (
            <p>No completed tasks</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;