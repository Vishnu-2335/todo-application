package com.todo.todo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.todo.todo.Entity.Todo;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Long> {
}