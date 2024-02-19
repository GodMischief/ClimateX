import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Profile from './Profile'; // Import the Profile component

const ProfilePopup = ({ onClose }) => {
  const { user } = useAuth0();

  return (
    <div className="profile-popup">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>close</button>
        {user && <Profile />}
      </div>
    </div>
  );
}

export default ProfilePopup;
