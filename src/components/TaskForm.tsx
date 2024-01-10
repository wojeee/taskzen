// TaskForm.tsx
import React, { useState } from "react";

interface TaskFormProps {
  onAdd: (
    text: string,
    priority?: "low" | "medium" | "high",
    dueDate?: string
  ) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAdd }) => {
  const [taskText, setTaskText] = useState("");
  const [priority, setPriority] = useState<
    "low" | "medium" | "high" | undefined
  >(undefined); // Ensure priority can be undefined
  const [dueDate, setDueDate] = useState("");

  const handleAddTask = () => {
    if (taskText.trim() !== "") {
      onAdd(taskText, priority, dueDate); // Pass priority to onAdd
      setTaskText("");
      setPriority(undefined); // Clear priority after adding the task
      setDueDate(""); // Clear the due date input after adding the task
    }
  };

  return (
    <div className="task-form">
      <input
        type="text"
        placeholder="Enter task"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <select
        value={priority || ""}
        onChange={(e) =>
          setPriority(e.target.value as "low" | "medium" | "high" | undefined)
        }
      >
        <option value="" disabled>
          Select priority
        </option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <input
        type="date"
        placeholder="Due date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskForm;
