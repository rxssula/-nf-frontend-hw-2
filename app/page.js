"use client";
import Image from "next/image";
import { useState } from "react";
import TaskItem from "./components/TaskItem";

const task = { id: 1, text: "Todo Test", completed: false };

export default function Home() {
  const [tasks, setTasks] = useState([task]);
  const [taskText, setTaskText] = useState("");
  const filter = "all"; // rewrite using states

  const handleAddTask = () => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: prevTasks.length + 1, text: taskText, completed: false },
    ]);
    setTaskText("");
  };

  const handleToggleTask = (id) => {
    setTasks(
      tasks.map((task) => {
        task.id === id ? { ...task, completed: !task.completed } : task;
      })
    );
  };

  const handleDeleteTask = () => {
    // Implement delete task logic here
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
      <div className="bg-gray-800 rounded p-4">
        {/* Medium level: extract todo's listing to TaskList component */}
        {/* Basic level: map through tasks state by using this code: */}
        <ul>
          {tasks.map((task) => (
            <TaskItem {...task} handleToggleTask={handleToggleTask} />
          ))}
        </ul>
        <div className="mt-4 flex justify-between items-center text-sm text-gray-400">
          <span> 'n' items left</span>{" "}
          {/* show how many uncompleted items left */}
          <div>
            <button
              onClick={() => alert("Show all")}
              className={`mr-2 ${filter === "all" ? "text-white" : ""}`}
            >
              All
            </button>
            <button
              onClick={() => alert("Show active")}
              className={`mr-2 ${filter === "active" ? "text-white" : ""}`}
            >
              Active
            </button>
            <button
              onClick={() => alert("Show completed")}
              className={`${filter === "completed" ? "text-white" : ""}`}
            >
              Completed
            </button>
          </div>
          <button
            onClick={() => alert("Clear completed tasks")}
            className="text-gray-400 hover:text-white"
          >
            Clear Completed
          </button>
        </div>
      </div>
    </div>
  );
}
