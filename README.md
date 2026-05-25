# To-Do List Application

A full-stack To-Do List web application built using **React.js**, **Spring Boot**, and **MySQL** that helps users efficiently manage daily tasks by organizing them into **In Progress** and **Completed** sections.

## Problem Solved
Managing daily tasks manually can be time-consuming and unorganized. This application provides a simple digital task management system where users can create, track, update, and complete tasks easily.

---

## Features

- Create new tasks with:
  - Task Title
  - Task Description
- Automatically add new tasks to **In Progress**
- Mark tasks as completed using a checkbox
- Move completed tasks back to in-progress by unchecking
- Delete tasks
- Persistent task storage using MySQL database
- Real-time frontend-backend integration

---

## Tech Stack

### Frontend
- React.js
- Vite
- Axios
- CSS

### Backend
- Spring Boot
- Spring Web
- Spring Data JPA

### Database
- MySQL Workbench

---

## Project Structure

### Backend
```bash
backend/
│
├── src/main/java/com/todo/todo
│   ├── Controller
│   │   └── TodoController.java
│   │
│   ├── Entity
│   │   └── Todo.java
│   │
│   ├── Repository
│   │   └── TodoRepository.java
│   │
│   ├── Service
│   │   └── TodoBackendApplication.java
│   │
│   └── TodoApplication.java
│
└── src/main/resources
    └── application.properties
```

### Frontend
```bash
frontend/
│
├── src
│   ├── components
│   │   ├── TaskForm.jsx
│   │   └── TaskCard.jsx
│   │
│   ├── services
│   │   └── api.js
│   │
│   ├── App.jsx
│   └── App.css
```

---


## Installation & Setup

### Clone Repository
```bash
git clone https://github.com/YOUR_USERNAME/todo-application.git
cd todo-application
```

---

### Backend Setup
```bash
cd backend
mvn spring-boot:run
```

Runs on:
```bash
http://localhost:8080
```

---

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

Runs on:
```bash
http://localhost:5173
```

---

## Author

**Vishnu Nair**

GitHub: https://github.com/Vishnu-2335
