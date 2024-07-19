import {React,useEffect, useState} from "react";
import "./MainPage.css";
import SortButtons from "../Functions/SortButtons";
import SearchBar from "../Functions/SearchBar";
import ModalUserInfo from "../Modals/ModalUserInfo";

const MainPage = () =>{

    const [users,setUsers] = useState([]);
    const [searchWord, setSearchWord] = useState("");
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [active, setActive] = useState(false);
    const [selectedUser, setSelectedUser] = useState([]);

    useEffect(()=>{
        fetch('https://dummyjson.com/users')
        .then(res => res.json())
        .then(data => {
            setUsers(data.users)
            setFilteredUsers(data.users)
            console.log(data.users)
        })
        .catch(error=>console.error('Ошибка',error))
    },[])

    const handleItemClick = (user) => {
        console.log(user)
        setSelectedUser(user)
        setActive(true);
    };

return(
    <>
        <div className="container">
        {active && selectedUser && <ModalUserInfo active={active} setActive={setActive} selectedUser={selectedUser}/>}
           <SearchBar 
                searchWord={searchWord} 
                setSearchWord={setSearchWord} 
                setFilteredUsers={setFilteredUsers} 
                users={users}
            />
            <table>
                <thead>
                    <tr>
                        <th>ФИО <SortButtons column="lastName" setFilteredUsers={setFilteredUsers} filteredUsers={filteredUsers}/></th>
                        <th>Возраст <SortButtons column="age" setFilteredUsers={setFilteredUsers} filteredUsers={filteredUsers}/></th>
                        <th>Пол <SortButtons column="gender" setFilteredUsers={setFilteredUsers} filteredUsers={filteredUsers}/></th>
                        <th>Номер телефона</th>
                        <th>Адрес(город и название улицы) <SortButtons column="address.city" setFilteredUsers={setFilteredUsers} filteredUsers={filteredUsers}/></th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(filteredUsers) && filteredUsers.map(user => (
                        <tr key={user.id} onClick={()=>handleItemClick(user)}>
                            <td>{user.lastName} {user.firstName} {user.maidenName}</td>
                            <td>{user.age}</td>
                            <td>{user.gender}</td>
                            <td>{user.phone}</td>
                            <td>{user.address.city}, {user.address.address}</td>
                        </tr>
                    ))}      
                </tbody>
            </table>
        </div>
    </>
)}

export default MainPage;