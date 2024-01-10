// TaskForm.tsx
import React, { useState } from "react";

interface TaskFormProps {
  onAdd: (text: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleAddClick = () => {
    if (text.trim() !== "") {
      onAdd(text);
      setText("");
    }
  };

  return (
    <div className="task-form">
      <input
        type="text"
        placeholder="Add a new task"
        className="task-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="add-button" onClick={handleAddClick}>
        Add
      </button>
    </div>
  );
};

export default TaskForm;
