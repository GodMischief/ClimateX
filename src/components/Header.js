import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

// Header component definition
function Header() {
  const { user, isAuthenticated } = useAuth0();

  return (
    <div>
      {/* Header section with a title and navigation */}
      <header>
        <h1 className='header-h1'>ClimateX</h1>
        {user && user.picture && <img className="user-img" src={user.picture} alt={user?.name} />}       
      </header>
    </div>
  );
}

// Exporting the Header component
export default Header;
