import React from 'react';

const SearchBar = ({ searchWord,setSearchWord,setFilteredUsers,users }) => {

    const Search = async (event) => {
        const value = event.target.value;
        setSearchWord(value);

        if (value) {
            // Поля для поиска
            const fields = ['lastName', 'firstName', 'maidenName', 'age', 'gender', 'phone', 'address.city', 'address.address'];
            const requests = fields.map(field => 
                fetch(`https://dummyjson.com/users/filter?key=${field}&value=${value}`)
                    .then(res => res.json())
                    .then(data => data.users || [])
            );

            Promise.all(requests)
                .then(results => {
                    // Объединение результатов из всех запросов
                    const mergedResults = results.flat();
                    // Удаление дубликатов пользователей
                    const uniqueUsers = Array.from(new Set(mergedResults.map(user => user.id)))
                        .map(id => mergedResults.find(user => user.id === id));
                    setFilteredUsers(uniqueUsers);
                })
                .catch(error => console.error('Ошибка', error));
        } else {
            setFilteredUsers(users);
        }
    };


    return (
        <div className="InputContainer">
            <p>Поиск по ключевым словам</p>
            <input onChange={Search} value={searchWord} />
        </div>
    );
};

export default SearchBar;
