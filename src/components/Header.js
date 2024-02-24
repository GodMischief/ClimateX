import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import ProfilePopup from './ProfilePopup'; // Import the ProfilePopup component
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Header() {
  const { user, isAuthenticated, logout } = useAuth0();
  const [showProfile, setShowProfile] = useState(false); // State to control profile popup visibility

  // Function to toggle profile popup visibility
  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  return (
    <div>
      {/* Header section with a title and navigation */}
      <header>
        <div className='header-container'>
          {/* Make the header title clickable to redirect to home */}
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h1 className='header-h1'>ClimateX</h1>
          </Link>
          <div className='header-links'>
            {isAuthenticated && user && user.picture && (
              <div>
                {/* Render user image as a clickable element */}
                <img className="user-img" src={user.picture} alt={user?.name} onClick={toggleProfile} />
              </div>
            )}
            {/* Render logout button only if authenticated */}
            {isAuthenticated && (
              <button onClick={() => logout()}>Logout</button>
            )}
          </div>
        </div>
      </header>
      {/* Render profile popup if showProfile is true */}
      {showProfile && <ProfilePopup onClose={toggleProfile} />}
    </div>
  );
}

export default Header;
