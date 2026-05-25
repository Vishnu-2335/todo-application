package com.todo.todo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.todo.todo.Entity.Todo;
import com.todo.todo.Repository.TodoRepository;

@Service
public class TodoBackendApplication {

    @Autowired
    private TodoRepository todoRepository;

    public Todo createTask(Todo todo) {
        todo.setCompleted(false);
        return todoRepository.save(todo);
    }

    public List<Todo> getAllTasks() {
        return todoRepository.findAll();
    }

    public Todo updateTaskStatus(Long id, boolean completed) {
        Todo todo = todoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Task not found"));

        todo.setCompleted(completed);
        return todoRepository.save(todo);
    }

    public void deleteTask(Long id) {
        todoRepository.deleteById(id);
    }
}