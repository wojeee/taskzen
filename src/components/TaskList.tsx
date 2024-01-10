// TaskList.tsx
import React from "react";
import TaskItem from "./TaskItem";

interface TaskListProps {
  tasks: {
    id: number;
    text: string;
    completed: boolean;
    priority: "low" | "medium" | "high";
    dueDate?: string;
  }[];
  onDelete: (id: number) => void;
  onToggle: (id: number, priority: "low" | "medium" | "high") => void; // Corrected this line
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete, onToggle }) => {
  const handleToggle = (id: number, priority: "low" | "medium" | "high") => {
    onToggle(id, priority);
  };

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
};

export default TaskList;
