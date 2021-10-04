import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, reminder }) => {
  return (
    <div
      className={`task ${task.reminder === true ? "reminder" : ""}`}
      onDoubleClick={() => reminder(task.id)}
    >
      <h3>
        {task.text}
        <FaTimes
          onClick={() => onDelete(task.id)}
          style={{ color: "red", curser: "pointer" }}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
