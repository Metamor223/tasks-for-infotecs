import React from "react";
import TasksItem from "./TasksItem"
import "./Task.css";

const TasksList = ({tasks}) =>{

    if(!tasks){
        return null;
    }

return(
    <>
         {Array.isArray(tasks) && tasks.map((task,index)=> (
        <TasksItem key={index} task={task}/>
        ))}
    </>
)}

export default TasksList;