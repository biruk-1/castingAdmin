import React, { useState, useEffect } from 'react';
import AddUser from './AddUser';
import EditUser from './EditUser';
import '../styles/UsersTable.css'; // For custom styles

function UsersTable({ users = [], onUpdateUser }) { // Default to an empty array if users is not provided
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [editingUser, setEditingUser] = useState(null);
  const [addingUser, setAddingUser] = useState(false);

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(1);
  };

  const handleFilterChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filtered = users.filter((user) => {
      return (
        user.firstName.toLowerCase().includes(searchTerm) ||
        user.lastName.toLowerCase().includes(searchTerm) ||
        user.email.toLowerCase().includes(searchTerm)
      );
    });
    setFilteredUsers(filtered);
  };

  const handleAddUser = (newUser) => {
    // Add the new user to the users list
    // Implement this function to update the users list in your state or backend
  };

  const handleEditUser = (updatedUser) => {
    // Update the user information in the users list
    onUpdateUser(updatedUser);
    setEditingUser(null);
  };

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  // Check if filteredUsers is defined and has length before calling .slice()
  const currentUsers = filteredUsers && filteredUsers.length > 0 ? filteredUsers.slice(startIndex, endIndex) : [];

  return (
    <div className="users-table-container">
      <h2>Users</h2>
      <div className="table-header">
        <input
          type="text"
          placeholder="Search"
          onChange={handleFilterChange}
        />
        <div className="pagination-controls">
          <select
            value={rowsPerPage}
            onChange={handleRowsPerPageChange}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
          </select>
          <div className="page-numbers">
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
            <span>{currentPage}</span>
            <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === Math.ceil(filteredUsers.length / rowsPerPage)}>Next</button>
          </div>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Role</th>
            <th>Disabled</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr key={user.id}>
              <td><input type="checkbox" /></td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.disabled ? 'Yes' : 'No'}</td>
              <td>
                <button onClick={() => setEditingUser(user)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => setAddingUser(true)}>Add User</button>
      {addingUser && <AddUser onAddUser={handleAddUser} />}
      {editingUser && <EditUser user={editingUser} onUpdateUser={handleEditUser} onClose={() => setEditingUser(null)} />}
    </div>
  );
}

export default UsersTable;
