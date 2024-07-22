import {React,useState,useEffect} from "react"
import "./Modal.css"

const ModalEditTask = ({task,active,setActive}) =>{
    const [heading, setHeading] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')

    useEffect(() => {
        if (task) {
            setHeading(task.Heading);
            setDescription(task.Description);
            setDate(task.Date);
        }
    }, [task]);

const EditToStorage = () =>{
    const formDataObject = {
        Heading: heading,
        Description: description,
        Date: date
    };

     if (task.Heading !== heading) {
        window.localStorage.removeItem(task.Heading);
    }

    window.localStorage.setItem(heading,JSON.stringify(formDataObject))
        setActive(false);
}

return(
         <div className={active ? "modal active" : "modal"}>
            <div className="modal_body">
        
            <div className="modal_header">
                <div className="buttonX">
                    <li onClick={()=>setActive(false)}>X</li>
                </div>
                    <h3>Форма редактирования задачи</h3>    
            </div>
                <form>
                    <p>Заголовок: 
                        <input required="required" 
                        value={heading}
                        onChange={e=>setHeading(e.target.value)}/>
                    </p>
                    <p>Описание: 
                        <input required="required"
                        value={description}
                        onChange={e=>setDescription(e.target.value)}/>
                        </p>
                    <p>Дата выполнения: 
                        <input type="date" required="required"
                        value={date}
                        onChange={e=>setDate(e.target.value)}/>
                        </p>
                    <li onClick={()=>EditToStorage()}>Обновить запись</li>
                </form>
            </div>
        </div>
)}

export default ModalEditTask