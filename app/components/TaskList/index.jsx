import React, { useState } from "react";
import TaskItem from "../TaskItem";

const TaskList = ({ tasks, toggle, deleteTask }) => {
  // Render TaskItems using TaskItem component
  // Filter tasks by status here

  return (
    <div className="bg-gray-800 rounded p-4">
      {/* Medium level: extract todo's listing to TaskList component */}
      {/* Basic level: map through tasks state by using this code: */}
      <ul>
        {tasks.map((t) => (
          <TaskItem {...t} toggle={toggle} deleteTask={deleteTask} />
        ))}
      </ul>
      <div className="mt-4 flex justify-between items-center text-sm text-gray-400">
        <span> 'n' items left</span>
        {/* show how many uncompleted items left */}
        {/* <div>
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
        </div> */}
        <button
          onClick={() => alert("Clear completed tasks")}
          className="text-gray-400 hover:text-white"
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default TaskList;
