import Taskitem from "./taskItem";
function TaskList ({tasks,onDeleteTask,onChangeStatus}){
return (
    <div>
        <table >
  <thead>
    <tr>
      <th >ID</th>
      <th >Description</th>
      <th >Done</th>
      <th >Delete</th>
    </tr>
  </thead>
  <tbody>
    <Taskitem tasks={tasks} onDeleteTask={onDeleteTask} onChangeStatus={onChangeStatus}></Taskitem>
  </tbody>
</table>
    </div>
    
)
}
export default TaskList