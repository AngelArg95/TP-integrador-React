import { IoTrashBin } from "react-icons/io5";
import { IoCloseCircle } from "react-icons/io5";
import Swal from 'sweetalert2'
function Taskitem({ tasks, onDeleteTask, onChangeStatus }) {

    return (
        <>
            {tasks.map(t => <tr style={t.isCompleted ? { textDecoration: "line-through" } : undefined} key={t.id}>
                <td>{t.id.slice(-5)}</td>
                <td>{t.description}</td>
                <td><IoCloseCircle onClick={function () {
                    onChangeStatus(t.id)
                    if (t.isCompleted) {
                        Swal.fire({
                            title: "Something wrong?",
                            text: "The task is not done yet?",
                            icon: "question"
                        });
                    } else( Swal.fire({
                        title: "Great Job!",
                        text: "One task completed,keep going!",
                        icon: "success"
                    })
                    );
                    
                }
                
                } size={50} color="blue" className="iconsTasks" /></td>
                <td><IoTrashBin size={50} color="tomato" className="iconsTasks" onClick={function () {
                    onDeleteTask(t.id)
                    Swal.fire({
                        title: "Lets do some cleaning here!",
                        text: "You just delete a task,did you finish it?",
                        icon: "warning"
                    });
                }}></IoTrashBin> </td>
            </tr>)}

        </>

    )
}
export default Taskitem