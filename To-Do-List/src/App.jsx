import { useState, useEffect } from 'react';
import styles from './App.module.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Load tasks from localStorage on mount
  useEffect(() => {
    const storedTasks = localStorage.getItem("myTodoTasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("myTodoTasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const editTask = (index, newTask) => {
    const updated = [...tasks];
    updated[index] = newTask;
    setTasks(updated);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>📝 To-Do List</h1>
      <TodoInput onAdd={addTask} />
      <TodoList tasks={tasks} onDelete={deleteTask} onEdit={editTask} />
    </div>
  );
};

export default App;
