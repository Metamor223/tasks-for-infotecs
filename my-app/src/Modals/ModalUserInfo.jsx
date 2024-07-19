import {React,useEffect,useState,useParams} from 'react';
import "./ModalUserInfo.css";

export default function ModalUserInfo({active, setActive, selectedUser}){

    const [user] = useState(selectedUser);

    return(
       <div className={active ? "modal active" : "modal"}>
            <div className="modal_body">
                {user ? (
                <div>
                    <h3>ФИО: {user.lastName} {user.firstName} {user.maidenName}</h3>
                    <h3>Возраст: {user.age}</h3>
                    <h3>Адрес (город и название улицы): {user.address?.city || 'Нет данных'}, {user.address?.address || 'Нет данных'}</h3>
                    <h3>Рост: {user.height}</h3>
                    <h3>Вес: {user.weight}</h3>
                    <h3>Номер телефона: {user.phone}</h3>
                    <h3>email-адрес: {user.email}</h3>
                </div>
                ) : (
                    <p>Загрузка данных...</p>
                )}
                <button onClick={()=>setActive(false)}>Закрыть</button>
            </div>
        </div>
    )}