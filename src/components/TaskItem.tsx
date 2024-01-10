// TaskItem.tsx
import React from "react";

interface TaskItemProps {
  task: {
    id: number;
    text: string;
    completed: boolean;
  };
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.completed ? "completed" : ""}`}
      onClick={() => onToggle(task.id)}
    >
      <span>{task.text}</span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
