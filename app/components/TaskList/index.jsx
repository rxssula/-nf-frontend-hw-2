import React, { useState } from "react";
import TaskItem from "../TaskItem";

const TaskList = ({
  tasks,
  handleToggleTask,
  handleDeleteTask,
  handleCompletedTasks,
  setFilter,
  filter,
}) => {
  // Render TaskItems using TaskItem component
  // Filter tasks by status here
  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
  });
  return (
    <div className="bg-gray-800 rounded p-4">
      <ul>
        {filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            handleDeleteTask={handleDeleteTask}
            handleToggleTask={handleToggleTask}
            {...task}
          />
        ))}
      </ul>
      <div className="mt-4 flex justify-between items-center text-sm text-gray-400">
        <span> {filteredTasks.length} items left</span>{" "}
        {/* show how many uncompleted items left */}
        <div>
          <button
            onClick={() => setFilter("all")}
            className={`mr-2 ${filter === "all" ? "text-white" : ""}`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("active")}
            className={`mr-2 ${filter === "active" ? "text-white" : ""}`}
          >
            Active
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={`${filter === "completed" ? "text-white" : ""}`}
          >
            Completed
          </button>
        </div>
        <button
          onClick={() => handleCompletedTasks()}
          className="text-gray-400 hover:text-white"
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default TaskList;
