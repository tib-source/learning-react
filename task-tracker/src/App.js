import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";
function App() {
  const [showAdd, setShowAdd] = useState(false)
  const [tasks, setTasks] = useState([]);

  // create Task
  const createTask = (newTask) => {
    console.log(tasks)
    setTasks([...tasks, newTask])
  }

  // delete Task

  const deleteTask = (id) => {
    setTasks(
      tasks.filter((task) => {
        return task.id !== id;
      })
    );
  };

  //toggle reminder

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  // toggle form 

  const toggleAdd =()=>{
    setShowAdd(!showAdd)
    console.log("running")
  }
  return (
    <div className="container">
      <Header toggleAdd={toggleAdd} showAdd={showAdd} />
      { showAdd && <AddTask createTask={createTask} />}

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} reminder={toggleReminder} />
      ) : (
        "No tasks to show"
      )}
    </div>
  );
}

export default App;
