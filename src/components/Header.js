import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import ProfilePopup from './ProfilePopup'; // Import the ProfilePopup component

function Header() {
  const { user, isAuthenticated } = useAuth0();
  const [showProfile, setShowProfile] = useState(false); // State to control profile popup visibility

  // Function to toggle profile popup visibility
  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  return (
    <div>
      {/* Header section with a title and navigation */}
      <header>
        <h1 className='header-h1'>ClimateX</h1>
        {isAuthenticated && user && user.picture && (
          <div>
            {/* Render user image as a clickable element */}
            <img className="user-img" src={user.picture} alt={user?.name} onClick={toggleProfile} />
          </div>
        )}
      </header>
      {/* Render profile popup if showProfile is true */}
      {showProfile && <ProfilePopup onClose={toggleProfile} />}
    </div>
  );
}

export default Header;
