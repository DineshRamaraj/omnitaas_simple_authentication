import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const navigate = useNavigate();
    const username = localStorage.getItem('username');

    // Basic protection: if no username in storage, maybe they didn't login properly
    useEffect(() => {
        if (!username) {
            navigate('/');
        }
    }, [username, navigate]);

    const handleLogout = () => {
        // Clear username if needed, but requirements state: 
        // "Remember username after successful login for subsequent logins."
        // We'll just navigate back to login.
        navigate('/');
    };

    return (
        <div className="welcome-container">
            <div className="welcome-card">
                <h1>Welcome, {username}!</h1>
                <p>You have successfully logged in to the application.</p>
                <button onClick={handleLogout} className="logout-btn">
                    Go Back to Login
                </button>
            </div>
        </div>
    );
};

export default Welcome;
