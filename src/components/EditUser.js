import React, { useState } from 'react';
import '../styles/UserEdit.css';

function UserEdit() {
  const [firstName, setFirstName] = useState('Admin');
  const [lastName, setLastName] = useState('Last Name');
  const [phone, setPhone] = useState('1-555-666-7070');
  const [email, setEmail] = useState('admin@flatlogic.com');
  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (e) => {
    setProfileImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleReset = () => {
    setFirstName('Admin');
    setLastName('Last Name');
    setPhone('1-555-666-7070');
    setEmail('admin@flatlogic.com');
    setProfileImage(null);
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert('User profile saved successfully!');
  };

  return (
    <div className="user-edit-container">
      <h2>Personal Information</h2>
      <form onSubmit={handleSave}>
        <div className="form-group">
          <label>Photo:</label>
          <div className="image-upload">
            <button className="upload-button">
              <input
                type="file"
                onChange={handleImageChange}
                accept="image/png, image/jpeg"
              />
              Upload an image
            </button>
            {profileImage && <img src={profileImage} alt="Profile Preview" className="profile-preview" />}
            <p>.PNG, .JPG, .JPEG</p>
          </div>
        </div>

        <div className="form-group">
          <label>Name</label>
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
          <label>Phone</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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

        <div className="buttons-container">
          <button type="button" className="reset-button" onClick={handleReset}>
            RESET
          </button>
          <button type="submit" className="save-button">
            SAVE
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserEdit;
