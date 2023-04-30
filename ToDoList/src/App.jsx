
import { useEffect, useState } from 'react';
import './App.css'
import NewTask from "./components/NewTask"
import TaskList from "./components/TaskList"

function App() {



  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
    );


  const [complete, setComplete] = useState(
    JSON.parse(localStorage.getItem("complete")) || []
    );

  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  useEffect(()=>{
    localStorage.setItem("complete", JSON.stringify(complete))
  }, [complete])





  let handleDelete = (id) => {
    let currentTask;
    let update = tasks.filter((task) => {
      if (task.id == id) {
        currentTask = task
        return false
      } else {
        return true
      }
    })

    setTasks(update);

    return currentTask
  }
  let handleComplete = (id) => {

    let current = handleDelete(id)
    current.complete = true
    setComplete((complete) => [...complete, current])
  }

  return (
    <div className='container'>
      <NewTask createTask={setTasks} />
      <TaskList taskArray={tasks} setComplete={handleComplete} handleDelete={handleDelete} />
      <TaskList taskArray={complete} />
    </div>
  )
}

export default App;
