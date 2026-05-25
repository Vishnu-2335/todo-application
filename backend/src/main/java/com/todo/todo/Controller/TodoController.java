package com.todo.todo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.todo.todo.Entity.Todo;
import com.todo.todo.Service.TodoBackendApplication;

@RestController
@RequestMapping("/api/todos")
@CrossOrigin(origins = "http://localhost:5173")
public class TodoController {

    @Autowired
    private TodoBackendApplication todoService;

    @PostMapping
    public Todo createTask(@RequestBody Todo todo) {
        return todoService.createTask(todo);
    }

    @GetMapping
    public List<Todo> getAllTasks() {
        return todoService.getAllTasks();
    }

    @PutMapping("/{id}")
    public Todo updateTaskStatus(
            @PathVariable Long id,
            @RequestParam boolean completed
    ) {
        return todoService.updateTaskStatus(id, completed);
    }

    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Long id) {
        todoService.deleteTask(id);
    }
}