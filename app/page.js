"use client";
import { useEffect, useState } from "react";
import TaskList from "./components/TaskList";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");
  const [filter, setFilter] = useState("all");
  const [nextId, setNextId] = useState(1);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    } else {
      setTasks([]);
    }
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks, isMounted]);

  const handleAddTask = () => {
    if (taskText.trim()) {
      setNextId(nextId + 1);
      const newTask = {
        id: nextId,
        text: taskText,
        completed: false,
      };
      setTasks((prevTasks) => [...prevTasks, newTask]);
    }
    setTaskText("");
  };

  const handleToggleTask = (id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const handleDeleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const handleCompletedTasks = () => {
    const newTasks = tasks.filter((task) => !task.completed);
    setTasks(newTasks);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-4xl font-bold">TODO</h1>
      </div>
      <div className="mb-4 flex items-center">
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          className="bg-gray-800 text-white border-none rounded p-4 flex-grow"
          placeholder="What to do ?"
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-500 text-white p-4 rounded ml-4"
        >
          Add Task
        </button>
      </div>
      <TaskList
        tasks={tasks}
        handleToggleTask={handleToggleTask}
        handleDeleteTask={handleDeleteTask}
        handleCompletedTasks={handleCompletedTasks}
        setFilter={setFilter}
        filter={filter}
      />
    </div>
  );
}
