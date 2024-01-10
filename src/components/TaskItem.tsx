// TaskItem.tsx
import React from "react";

interface TaskItemProps {
  task: {
    id: number;
    text: string;
    completed: boolean;
    priority: "low" | "medium" | "high";
    dueDate?: string;
  };
  onDelete: (id: number) => void;
  onToggle: (
    id: number,
    priority: "low" | "medium" | "high",
    completed: boolean
  ) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onDelete, onToggle }) => {
  const handleTaskToggle = () => {
    // Toggle the completion status when the task item is clicked
    onToggle(task.id, task.priority, !task.completed);
  };

  return (
    <div
      className={`task ${task.completed ? "completed" : ""}`}
      onClick={handleTaskToggle}
    >
      <span>{task.text}</span>
      <span className="priority">Priority: {task.priority}</span>
      <span className="due-date">{task.dueDate}</span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
