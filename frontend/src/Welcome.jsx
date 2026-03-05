import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Welcome = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const [userData, setUserData] = useState(null);
    const [apiMessage, setApiMessage] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            if (!token) {
                navigate('/');
                return;
            }

            try {
                const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
                const response = await axios.get(`${apiUrl}/api/welcome`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if (response.status === 200) {
                    setUserData(response.data.user);
                    setApiMessage(response.data.message);
                }
            } catch (err) {
                console.error("Authentication failed:", err);
                setError("Session expired or unauthorized. Please log in again.");
                localStorage.removeItem('token');
                localStorage.removeItem('username');

                // Allow user to see the message briefly before redirecting
                setTimeout(() => navigate('/'), 2500);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [token, navigate]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        navigate('/');
    };

    if (loading) {
        return (
            <div className="welcome-container">
                <div className="welcome-card" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
                    <span className="spinner" style={{ borderColor: 'var(--primary-color)', borderTopColor: 'transparent' }}></span>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="welcome-container">
                <div className="welcome-card">
                    <h2 style={{ color: 'var(--error-color)' }}>Authentication Error</h2>
                    <p style={{ textAlign: 'center', marginTop: '1rem', marginBottom: '2rem' }}>{error}</p>
                    <button onClick={handleLogout} className="login-btn">
                        Return to Login
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="welcome-container">
            <div className="welcome-card">
                <h1>Welcome, {userData?.username || 'User'}!</h1>
                <p>{apiMessage || 'You have successfully authenticated against the protected API.'}</p>
                <button onClick={handleLogout} className="logout-btn">
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Welcome;
