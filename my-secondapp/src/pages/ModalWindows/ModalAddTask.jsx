import {React,useState} from "react"
import "./Modal.css";

const ModalAddTask = ({active, setActive, addTask}) =>{

    const [heading, setHeading] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')

    const validateForm = () => {
        if (!heading) {
            return "Заголовок обязателен.";
        }
        if (!date) {
            return "Дата выполнения обязательна.";
        }
        return null;
    };

const addToStorage = () =>{
    const errorMessage = validateForm();
    if (errorMessage) {
        alert(errorMessage);
        return;
    }
    const formDataObject = {
        Heading: heading,
        Description: description,
        Date: date
    };
    window.localStorage.setItem(heading,JSON.stringify(formDataObject))
        setActive();
}

return(
         <div className={active ? "modal active" : "modal"}>
            <div className="modal_body">
                
            <div className="modal_header">
                <div className="buttonX">
                    <li onClick={()=>setActive(false)}>X</li>
                </div>
                    <h3>Форма дабавления задачи</h3>    
            </div>
                <form>
                    <p>Заголовок: 
                        <input required="required" 
                        value={heading}
                        onChange={e=>setHeading(e.target.value)}/>
                    </p>
                    <p>Описание: 
                        <input 
                        value={description}
                        onChange={e=>setDescription(e.target.value)}/>
                        </p>
                    <p>Дата выполнения: 
                        <input type="date" required="required"
                        value={date}
                        onChange={e=>setDate(e.target.value)}/>  
                    </p>
                    <li onClick={()=>addToStorage()}>Добавить запись</li>
                </form>
            </div>
        </div>
)}

export default ModalAddTask