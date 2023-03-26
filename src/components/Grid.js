import React, { useState } from 'react';
import './Grid.css'; // import your CSS file here

const Grid = () => {
  const [data, setData] = useState([
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Doe', age: 25 },
    { id: 3, name: 'Bob Smith', age: 40 },
    { id: 4, name: 'Alice Johnson', age: 35 },
    { id: 5, name: 'Charlie Brown', age: 20 },
    { id: 6, name: 'Lucy Smith', age: 28 },
    { id: 7, name: 'Samuel Lee', age: 45 },
    { id: 8, name: 'Oliver Green', age: 50 },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);
  const [searchTerm, setSearchTerm] = useState('');

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const filteredData = data.filter((item) => {
    return Object.values(item)
      .join(' ')
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
  });

  const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const renderTableData = () => {
    return currentData.map((item) => {
      const { id, name, age } = item;
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{age}</td>
          <td>
            <button>Edit</button>
            <button>Delete</button>
          </td>
        </tr>
      );
    });
  };

  const renderPagination = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="pagination">
        {pageNumbers.map((number) => {
          return (
            <span
              key={number}
              className={currentPage === number ? 'active' : ''}
              onClick={() => setCurrentPage(number)}
            >
              {number}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <div className="grid">
      <div className="search">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderTableData()}</tbody>
      </table>
      {renderPagination()}
    </div>
  );
};

export default Grid;
