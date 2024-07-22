import {React,useEffect, useState} from "react";
import "./MainPage.css";
import TasksList from "../TasksList/TasksList";
import ModalAddTask from "../ModalWindows/ModalAddTask";

const MainPage = () =>{

    const [tasks,setTasks] = useState([]);
    const [activeAddForm, setActiveAddForm] = useState(false);
    const [sortType, setSortType] = useState('Без сортировки');

    useEffect(()=>{
        const storedTasks = [];
        for (let i = 0; i < window.localStorage.length; i++) {
            const key = window.localStorage.key(i);
            const task = JSON.parse(window.localStorage.getItem(key));
            storedTasks.push(task);
        }
        setTasks(storedTasks);
    },[])

return(
    <>
        <div className="container">
           <header>
                <p>
                    Записная книжка
                </p>
            </header>

            <ModalAddTask active={activeAddForm} setActive={setActiveAddForm}/>
            <div className="sortAndAddButtons">
                <li onClick={()=>setActiveAddForm(true)}>
                    Добавить запись
                </li>
                <select value={sortType}>
                    <option>Без сортировки</option>
                    <option>Срочные задачи</option>
                    <option>Несрочные задачи</option>
                </select>
            </div>
            <ul>
                <TasksList tasks={tasks}/>
            </ul>
        </div>
    </>
)}

export default MainPage;