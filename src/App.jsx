import { useState } from "react"
import Input from "./components/Input"
import TaskList from './components/TaskList';
import "./App.css"
function App() {
  const [tasks, setTasks] = useState([]);
  const handleAddTask = (description) => {
    const newTask = {
      id: self.crypto.randomUUID(),
      description: description,
      isCompleted: false,
    };
    setTasks([...tasks,newTask]);
  };
  const handleChangeStatus = (id) =>{

  }
  const handleDeleteTask = (id) => {
    const remainingTasks =tasks.filter(t=> t.id !== id);
    setTasks([...remainingTasks])
    console.log(tasks)
    console.log(remainingTasks)
  }
  return (
    <>
      <h1>Lista de Tareas</h1>
      <Input onAddTask={(description) => handleAddTask(description)}></Input>
      <TaskList
       onDeleteTask={(id)=> handleDeleteTask(id)} tasks={tasks}>
       onChangeStatus={(id)=>handleChangeStatus(id)}
       </TaskList>
    </>
  )
}

export default App
