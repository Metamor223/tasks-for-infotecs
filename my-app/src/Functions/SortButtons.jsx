import React, { useState } from 'react';

const SortButtons = ({column, setFilteredUsers, filteredUsers}) =>{
const [sortType, setSortType] = useState(null);

  const handleSortChange = (event) => {
    const newSortType = event.target.value;
    setSortType(newSortType);

    if (newSortType === 'none') {
      // Отмена сортировки
      setFilteredUsers([...filteredUsers].sort((a, b) => a.id - b.id)); // Сортировка по id для исходного порядка
      return;
    }

    const sortedUsers = [...filteredUsers].sort((a, b) => {
      if (newSortType === 'asc') {
        return a[column] > b[column] ? 1 : -1;
      } else if (newSortType === 'desc') {
        return a[column] < b[column] ? 1 : -1;
      }
      return 0;
    });
    setFilteredUsers(sortedUsers);
  };

  return (
    <select value={sortType || 'none'} onChange={handleSortChange}>
      <option value="none">Без сортировки</option>
      <option value="asc">По возрастанию</option>
      <option value="desc">По убыванию</option>
    </select>
  );
};

export default SortButtons;