import { IoTrashBin } from "react-icons/io5";
import { IoCloseCircle } from "react-icons/io5";


function TaskList ({tasks,onDeleteTask,onChangeStatus}){
return (
    <>
    <div>
        <ul>
            {tasks.map(t=><li>{t.description} {t.id} {t.isCompleted? "completed":"to Do"} <IoTrashBin size={20} color="tomato" className="iconsTasks" onClick={() => onDeleteTask(t.id)}>
            </IoTrashBin> 
            <IoCloseCircle onClick={()=>onChangeStatus(t.id)} size={20} color="blue" className="iconsTasks" />
</li>)}
        </ul>
    </div>
    </>
)
}
export default TaskList