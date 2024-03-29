import { useAuth0 } from '@auth0/auth0-react';

// LogoutButton component for handling user logout
const LogoutButton = () => {
    // Destructuring necessary functions from the useAuth0 hook
    const { logout, isAuthenticated } = useAuth0();

    // Rendering the logout button only if the user is authenticated
    return (
        isAuthenticated && (
            <div className='signout'>
                {/* Displaying a thank-you message */}
                <h1>Thanks for using ClimateX!</h1>

            </div>
        )
    );
}

// Exporting the LogoutButton component as the default export
export default LogoutButton;
