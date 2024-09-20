import React, { useState } from 'react';
import '../styles/ProfileSection.css';

const ProfileSection = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [visibility, setVisibility] = useState('Anyone');

  const handleImageChange = (e) => {
    setProfileImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleVisibilityChange = (e) => {
    setVisibility(e.target.value);
  };

  return (
    <div className="profile-section-container">
      {/* Banner Section */}
      <div className="profile-banner">
        <img
          src="images/users/user2.jpg" // Add your banner image link here
          alt="Banner"
          className="banner-image"
        />
        <div className="profile-avatar-container">
          <img
            src={profileImage || 'images/users/user2.jpg'} // Default profile image or uploaded image
            alt="Profile Avatar"
            className="profile-avatar"
          />
          <div style={{objectFit:"cover", marginBottom:"40px"}} className="visibility-control">
            <label>Who can see your profile photo?</label>
            <select value={visibility} onChange={handleVisibilityChange}>
              <option value="Anyone">Anyone</option>
              <option value="Friends">Friends</option>
              <option value="Only Me">Only Me</option>
            </select>0
            <button className="upload-button">
              <input
                type="file"
                onChange={handleImageChange}
                accept="image/png, image/jpeg"
              />
              Upload Cover
            </button>
          </div>
        </div>
      </div>

      {/* Profile Info Section */}
      <div className="profile-info-section">
        <h2>Profile Info</h2>
        <form>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" value="Jennifer Lawrence" />
          </div>

          <div className="form-group">
            <label>Date of Birth</label>
            <input type="date" value="1984-08-15" />
          </div>

          <div className="form-group">
            <label>Gender</label>
            <div style={{width:'10%'}} className="radio-group">
              <input type="radio" name="gender" value="Male" /> Male
              <input type="radio" name="gender" value="Female" checked /> Female
              <input type="radio" name="gender" value="Prefer Not to Say" /> Prefer Not to Say
            </div>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" value="jenniferlawrence@abc.com" />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" value="+1 (123) 456-7890" />
          </div>

          <div className="form-group">
            <label>Department</label>
            <select>
              <option value="CRM Team">CRM Team</option>
              <option value="Marketing">Marketing</option>
              <option value="Development">Development</option>
            </select>
          </div>

          <div className="form-group">
            <label>Account Type</label>
            <div style={{width:'10%'}} className="radio-group">
              <input type="radio" name="accountType" value="Individual" checked /> Individual
              <input type="radio" name="accountType" value="Company" /> Company
            </div>
          </div>

          <div className="form-group">
            <label>Country</label>
            <select>
              <option value="Netherlands">Netherlands</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
            </select>
          </div>

          <div className="form-group">
            <label>Address Line 1</label>
            <input type="text" value="123 Main St" />
          </div>

          <div className="form-group">
            <label>City</label>
            <input type="text" value="Miami" />
          </div>

          <div className="form-group">
            <label>Postal Code</label>
            <input type="text" value="33101" />
          </div>

          <div className="form-group">
            <button type="submit" className="save-button">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileSection;
