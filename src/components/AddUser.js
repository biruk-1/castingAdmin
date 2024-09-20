import React, { useState } from 'react';
import '../styles/addUser.css';

function AddUser({ onAddUser }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: Date.now(), // Simple unique id based on timestamp
      firstName,
      lastName,
      phoneNumber,
      email,
      role,
      disabled
    };
    onAddUser(newUser);
    // Clear form
    setFirstName('');
    setLastName('');
    setPhoneNumber('');
    setEmail('');
    setRole('');
    setDisabled(false);
  };

  return (
    <div className="add-user-container">
      <h1>Add User</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Role</label>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Disabled</label>
          <input
            type="checkbox"
            checked={disabled}
            onChange={(e) => setDisabled(e.target.checked)}
          />
        </div>
        <div>
         <input type="radio" name="op1" value="fill.jsp"/>option 1<br/>
 
        </div>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default AddUser;
