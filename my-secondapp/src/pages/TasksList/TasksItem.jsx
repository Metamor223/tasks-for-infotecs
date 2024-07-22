import {React,  useState} from 'react';
import ModalEditTask from '../ModalWindows/ModalEditTask';

const TasksItem = ({ task }) => {

    const [active,setActive] = useState(false)

    const RemoveItemLocalStorage = () => {
        try{
            window.localStorage.removeItem(task.Heading)
        } catch(error){
            console.log(error)
        }
    }

  return (
    <>
    <ModalEditTask active={active} setActive={setActive} task={task} />
        <div className="taskContainer" onClick={()=>setActive(true)}>
        <h1>{task.Heading}</h1>
        <p>{task.Description}</p>
        <p>{task.Date}</p>
        <li onClick={(e)=>{
            RemoveItemLocalStorage(); 
            e.stopPropagation();}}>
            Удалить задачу
        </li>
        </div>
    </>
  );
};

export default TasksItem;