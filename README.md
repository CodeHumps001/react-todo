# 📝 CreedTask

A modern, high-performance Todo application built with **React** and **Tailwind CSS**. This project was developed as a comprehensive implementation of core React principles as part of the **CreedTech** curriculum.

## 🚀 Project Objective

The goal was to build a functional task management interface demonstrating mastery of state management, component architecture, and dynamic UI rendering using 2025 React standards.

## 📂 App Structure

The project is built using a modular component architecture as per requirements:

- **`App.jsx`**: The central "Source of Truth." Manages the global state and orchestrates data flow.
- **`TodoForm.jsx`**: A controlled component handling user input and task creation logic.
- **`TodoList.jsx`**: The wrapper component responsible for mapping the collection of tasks.
- **`TodoItem.jsx`**: The presentation layer for individual tasks, handling specific event triggers (complete/delete).

## ✨ Features

- **Add Todo**: Input field to type tasks with validation to prevent empty entries.
- **Display Todos**: Dynamic list rendering using the `.map()` method with unique keys.
- **Mark as Completed**: Toggle task status with conditional styling (line-through text).
- **Delete Todo**: Efficient removal of items using immutable state filtering.
- **Empty State**: Custom encouraging messages when the list is clear.

## 🧠 Concepts Implemented
