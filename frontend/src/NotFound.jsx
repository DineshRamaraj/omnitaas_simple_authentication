import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="not-found-container">
            <div className="not-found-card">
                <div className="illustration-wrapper">
                    <svg viewBox="0 0 800 600" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
                        {/* Abstract Background Elements */}
                        <circle cx="400" cy="300" r="250" fill="#f3f4f6" />
                        <circle cx="600" cy="150" r="40" fill="#e0e7ff" />
                        <circle cx="200" cy="450" r="80" fill="#ede9fe" />
                        <path d="M100 200 L150 150 L200 200 Z" fill="#dbeafe" opacity="0.5" />

                        {/* 404 Text */}
                        <text x="400" y="280" fontFamily="Inter, sans-serif" fontSize="140" fontWeight="900" fill="#4f46e5" textAnchor="middle" opacity="0.1">404</text>

                        {/* Main Graphic - Lost Compass/Map */}
                        <g transform="translate(400, 320)">
                            {/* Map Paper */}
                            <path d="M-100,-80 L100,-80 L120,60 L-80,60 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="4" />
                            <path d="M-60,-80 L-40,60 M20,-80 L40,60 M-100,-40 L110,-40 M-90,20 L115,20" stroke="#f1f5f9" strokeWidth="2" />

                            {/* Broken Compass/Location Pin */}
                            <path d="M0,-120 C-30,-120 -50,-90 -50,-60 C-50,-20 0,40 0,40 C0,40 50,-20 50,-60 C50,-90 30,-120 0,-120 Z" fill="#ef4444" />
                            <circle cx="0" cy="-65" r="15" fill="#ffffff" />

                            {/* Shadow under pin */}
                            <ellipse cx="0" cy="50" rx="30" ry="10" fill="#94a3b8" opacity="0.3" />

                            {/* decorative lines */}
                            <path d="M-80,-10 L-20,-10 M40,-10 L80,-10" stroke="#cbd5e1" strokeWidth="4" strokeLinecap="round" />
                        </g>

                        {/* Speech Bubble */}
                        <g transform="translate(460, 160)">
                            <path d="M0,0 Q50,-40 100,-20 Q120,10 80,40 Q50,60 10,60 L-10,80 L0,50 Q-20,30 0,0 Z" fill="#ffffff" stroke="#e2e8f0" strokeWidth="3" />
                            <text x="50" y="25" fontFamily="Inter, sans-serif" fontSize="18" fontWeight="600" fill="#64748b" textAnchor="middle">Oops!</text>
                        </g>
                    </svg>
                </div>
                <h2>Page Not Found</h2>
                <p>This route is not available. It seems you've wandered into unknown territory.</p>
                <button className="login-btn" onClick={() => navigate('/')}>
                    Go Back Home
                </button>
            </div>
        </div>
    );
};

export default NotFound;
