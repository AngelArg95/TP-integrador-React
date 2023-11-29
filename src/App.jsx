import { useState,useEffect } from "react"
import TaskForm from "./components/TaskForm"
import "./App.css"
import TaskList from "./components/TaskList";
import Swal from 'sweetalert2'

function App() {
  const [tasks, setTasks] = useState([]);
  const handleAddTask = (description) => {
    const newTask = {
      id: self.crypto.randomUUID(),
      description: description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  };
  const handleChangeStatus = (id) => {
    const modifiedTasks = tasks.map(t => t.id === id ? { ...t, isCompleted: !t.isCompleted } : t);
    setTasks([...modifiedTasks])
  }
  const handleDeleteTask = (id) => {
    const remainingTasks = tasks.filter(t => t.id !== id);
    setTasks([...remainingTasks])
  }
  useEffect(function(){
    {if (document.title === "Keep Going") {
      document.title = "Good Work"
    } else{
      document.title = "Keep Going"
    }}[tasks]
  }
  )
  

 
  return (
    <>
      <h1>To Do List</h1>
      <TaskForm onAddTask={(description) => handleAddTask(description)}></TaskForm>
      <TaskList tasks={tasks} onDeleteTask={(id) => handleDeleteTask(id)} onChangeStatus={(id) => handleChangeStatus(id)} ></TaskList>
    </>
  )
}

export default App
