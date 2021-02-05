import { FaTimes } from "react-icons/fa";

export const Task = ({ task,onDelete,onToggle }) => {
    let style = {};
    if(task.reminder){
        style={borderLeft:"5px solid green"};
    }
    return (
        <div className="col-12 p-1 my-3" key={task.id} onDoubleClick={()=>{onToggle(task.id)}} style={style}>
            <h3 className="mx-auto" key={task.id}>
                {task.text} <FaTimes style={{color:"red",cursor:"pointer",float:"right"}} onClick={()=>{onDelete(task.id)}}/>
            </h3>
            <p>{task.day}</p>
        </div>
    )
}
