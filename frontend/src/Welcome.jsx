import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');

    // Protect route: redirect to login if no token exists
    useEffect(() => {
        if (!token) {
            navigate('/');
        }
    }, [token, navigate]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
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
