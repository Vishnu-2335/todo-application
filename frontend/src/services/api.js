import axios from "axios";

const API_URL = "http://localhost:8080/api/todos";

export const getTasks = async () => {
  return await axios.get(API_URL);
};

export const createTask = async (task) => {
  return await axios.post(API_URL, task, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const updateTaskStatus = async (id, completed) => {
  return await axios.put(`${API_URL}/${id}?completed=${completed}`);
};

export const deleteTask = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};